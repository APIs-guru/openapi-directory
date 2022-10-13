from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostVideosIDCommentThreadsPathParams:
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostVideosIDCommentThreadsRequestBody:
    text: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

@dataclass
class PostVideosIDCommentThreadsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostVideosIDCommentThreadsRequest:
    path_params: PostVideosIDCommentThreadsPathParams = field(default=None)
    request: Optional[PostVideosIDCommentThreadsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostVideosIDCommentThreadsSecurity = field(default=None)
    

@dataclass
class PostVideosIDCommentThreadsResponse:
    comment_thread_post_response: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
