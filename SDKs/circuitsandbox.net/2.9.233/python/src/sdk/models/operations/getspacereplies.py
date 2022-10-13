from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional


@dataclass
class GetSpaceRepliesPathParams:
    space_id: str = field(default=None, metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    topic_id: str = field(default=None, metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    
class GetSpaceRepliesSearchDirectionEnum(str, Enum):
    BEFORE = "BEFORE"
    AFTER = "AFTER"


@dataclass
class GetSpaceRepliesQueryParams:
    number_of_results: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'numberOfResults', 'style': 'form', 'explode': True }})
    search_direction: GetSpaceRepliesSearchDirectionEnum = field(default=None, metadata={'query_param': { 'field_name': 'searchDirection', 'style': 'form', 'explode': True }})
    timestamp: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSpaceRepliesSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSpaceRepliesRequest:
    path_params: GetSpaceRepliesPathParams = field(default=None)
    query_params: GetSpaceRepliesQueryParams = field(default=None)
    security: GetSpaceRepliesSecurity = field(default=None)
    

@dataclass
class GetSpaceRepliesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    space_reply: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
