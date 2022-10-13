from dataclasses import dataclass, field
from typing import Any


@dataclass
class DeleteVideosIDCommentsCommentIDPathParams:
    comment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideosIDCommentsCommentIDSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideosIDCommentsCommentIDRequest:
    path_params: DeleteVideosIDCommentsCommentIDPathParams = field(default=None)
    security: DeleteVideosIDCommentsCommentIDSecurity = field(default=None)
    

@dataclass
class DeleteVideosIDCommentsCommentIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
