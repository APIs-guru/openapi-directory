from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional


@dataclass
class GetSpaceTopicsPathParams:
    space_id: str = field(default=None, metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    
class GetSpaceTopicsSearchDirectionEnum(str, Enum):
    BEFORE = "BEFORE"
    AFTER = "AFTER"


@dataclass
class GetSpaceTopicsQueryParams:
    number_of_results: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'numberOfResults', 'style': 'form', 'explode': True }})
    search_direction: GetSpaceTopicsSearchDirectionEnum = field(default=None, metadata={'query_param': { 'field_name': 'searchDirection', 'style': 'form', 'explode': True }})
    timestamp: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSpaceTopicsSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSpaceTopicsRequest:
    path_params: GetSpaceTopicsPathParams = field(default=None)
    query_params: GetSpaceTopicsQueryParams = field(default=None)
    security: GetSpaceTopicsSecurity = field(default=None)
    

@dataclass
class GetSpaceTopicsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    space_topics: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
