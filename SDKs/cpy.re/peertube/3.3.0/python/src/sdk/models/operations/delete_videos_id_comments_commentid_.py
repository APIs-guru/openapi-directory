from dataclasses import dataclass, field
from typing import Any
from sdk.models import shared


@dataclass
class DeleteVideosIDCommentsCommentIDPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideosIDCommentsCommentIDSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideosIDCommentsCommentIDRequest:
    path_params: DeleteVideosIDCommentsCommentIDPathParams = field()
    security: DeleteVideosIDCommentsCommentIDSecurity = field()
    

@dataclass
class DeleteVideosIDCommentsCommentIDResponse:
    content_type: str = field()
    status_code: int = field()
    
