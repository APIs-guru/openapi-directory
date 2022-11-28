from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostVideosIDCommentThreadsPathParams:
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostVideosIDCommentThreadsRequestBody:
    text: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass
class PostVideosIDCommentThreadsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostVideosIDCommentThreadsRequest:
    path_params: PostVideosIDCommentThreadsPathParams = field()
    security: PostVideosIDCommentThreadsSecurity = field()
    request: Optional[PostVideosIDCommentThreadsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostVideosIDCommentThreadsResponse:
    content_type: str = field()
    status_code: int = field()
    comment_thread_post_response: Optional[Any] = field(default=None)
    
