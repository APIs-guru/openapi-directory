from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostVideosIDCommentsCommentIDPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostVideosIDCommentsCommentIDRequestBody:
    text: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass
class PostVideosIDCommentsCommentIDSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostVideosIDCommentsCommentIDRequest:
    path_params: PostVideosIDCommentsCommentIDPathParams = field()
    security: PostVideosIDCommentsCommentIDSecurity = field()
    request: Optional[PostVideosIDCommentsCommentIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostVideosIDCommentsCommentIDResponse:
    content_type: str = field()
    status_code: int = field()
    comment_thread_post_response: Optional[Any] = field(default=None)
    
