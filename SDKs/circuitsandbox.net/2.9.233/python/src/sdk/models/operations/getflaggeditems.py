from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional

class GetFlaggedItemsSearchDirectionEnum(str, Enum):
    BEFORE = "BEFORE"
    AFTER = "AFTER"


@dataclass
class GetFlaggedItemsQueryParams:
    number_of_results: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'numberOfResults', 'style': 'form', 'explode': True }})
    search_direction: GetFlaggedItemsSearchDirectionEnum = field(default=None, metadata={'query_param': { 'field_name': 'searchDirection', 'style': 'form', 'explode': True }})
    search_pointer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchPointer', 'style': 'form', 'explode': True }})
    timestamp: datetime = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFlaggedItemsSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFlaggedItemsRequest:
    query_params: GetFlaggedItemsQueryParams = field(default=None)
    security: GetFlaggedItemsSecurity = field(default=None)
    

@dataclass
class GetFlaggedItemsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    flagged_items_result: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
