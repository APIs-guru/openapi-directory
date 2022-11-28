from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetFlaggedItemsSearchDirectionEnum(str, Enum):
    BEFORE = "BEFORE"
    AFTER = "AFTER"


@dataclass
class GetFlaggedItemsQueryParams:
    search_direction: GetFlaggedItemsSearchDirectionEnum = field(metadata={'query_param': { 'field_name': 'searchDirection', 'style': 'form', 'explode': True }})
    timestamp: datetime = field(metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    number_of_results: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'numberOfResults', 'style': 'form', 'explode': True }})
    search_pointer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchPointer', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFlaggedItemsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFlaggedItemsRequest:
    query_params: GetFlaggedItemsQueryParams = field()
    security: GetFlaggedItemsSecurity = field()
    

@dataclass
class GetFlaggedItemsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    flagged_items_result: Optional[Any] = field(default=None)
    
