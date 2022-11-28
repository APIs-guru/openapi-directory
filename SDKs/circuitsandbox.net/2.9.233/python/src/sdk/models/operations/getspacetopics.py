from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetSpaceTopicsPathParams:
    space_id: str = field(metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    
class GetSpaceTopicsSearchDirectionEnum(str, Enum):
    BEFORE = "BEFORE"
    AFTER = "AFTER"


@dataclass
class GetSpaceTopicsQueryParams:
    search_direction: GetSpaceTopicsSearchDirectionEnum = field(metadata={'query_param': { 'field_name': 'searchDirection', 'style': 'form', 'explode': True }})
    number_of_results: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'numberOfResults', 'style': 'form', 'explode': True }})
    timestamp: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSpaceTopicsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSpaceTopicsRequest:
    path_params: GetSpaceTopicsPathParams = field()
    query_params: GetSpaceTopicsQueryParams = field()
    security: GetSpaceTopicsSecurity = field()
    

@dataclass
class GetSpaceTopicsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    space_topics: Optional[List[Any]] = field(default=None)
    
