from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetSpaceRepliesPathParams:
    space_id: str = field(metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    topic_id: str = field(metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    
class GetSpaceRepliesSearchDirectionEnum(str, Enum):
    BEFORE = "BEFORE"
    AFTER = "AFTER"


@dataclass
class GetSpaceRepliesQueryParams:
    search_direction: GetSpaceRepliesSearchDirectionEnum = field(metadata={'query_param': { 'field_name': 'searchDirection', 'style': 'form', 'explode': True }})
    number_of_results: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'numberOfResults', 'style': 'form', 'explode': True }})
    timestamp: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSpaceRepliesSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSpaceRepliesRequest:
    path_params: GetSpaceRepliesPathParams = field()
    query_params: GetSpaceRepliesQueryParams = field()
    security: GetSpaceRepliesSecurity = field()
    

@dataclass
class GetSpaceRepliesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    space_reply: Optional[Any] = field(default=None)
    
