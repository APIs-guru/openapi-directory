from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostVideosIDCommentsCommentIDPathParams:
    comment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostVideosIDCommentsCommentIDRequestBody:
    text: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

@dataclass
class PostVideosIDCommentsCommentIDSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostVideosIDCommentsCommentIDRequest:
    path_params: PostVideosIDCommentsCommentIDPathParams = field(default=None)
    request: Optional[PostVideosIDCommentsCommentIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostVideosIDCommentsCommentIDSecurity = field(default=None)
    

@dataclass
class PostVideosIDCommentsCommentIDResponse:
    comment_thread_post_response: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
