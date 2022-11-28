from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class V2GetTopicWithRepliesPathParams:
    space_id: str = field(metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    topic_id: str = field(metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class V2GetTopicWithRepliesQueryParams:
    number_of_replies: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'numberOfReplies', 'style': 'form', 'explode': True }})
    

@dataclass
class V2GetTopicWithRepliesSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class V2GetTopicWithRepliesRequest:
    path_params: V2GetTopicWithRepliesPathParams = field()
    query_params: V2GetTopicWithRepliesQueryParams = field()
    security: V2GetTopicWithRepliesSecurity = field()
    

@dataclass
class V2GetTopicWithRepliesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    space_topic_with_replies: Optional[Any] = field(default=None)
    
