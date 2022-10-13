from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class V2GetTopicWithRepliesPathParams:
    space_id: str = field(default=None, metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    topic_id: str = field(default=None, metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class V2GetTopicWithRepliesQueryParams:
    number_of_replies: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'numberOfReplies', 'style': 'form', 'explode': True }})
    

@dataclass
class V2GetTopicWithRepliesSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class V2GetTopicWithRepliesRequest:
    path_params: V2GetTopicWithRepliesPathParams = field(default=None)
    query_params: V2GetTopicWithRepliesQueryParams = field(default=None)
    security: V2GetTopicWithRepliesSecurity = field(default=None)
    

@dataclass
class V2GetTopicWithRepliesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    space_topic_with_replies: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
