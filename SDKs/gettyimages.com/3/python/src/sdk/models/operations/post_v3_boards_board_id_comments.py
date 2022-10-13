from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV3BoardsBoardIDCommentsPathParams:
    board_id: str = field(default=None, metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV3BoardsBoardIDCommentsRequest:
    path_params: PostV3BoardsBoardIDCommentsPathParams = field(default=None)
    request: Optional[shared.CommentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV3BoardsBoardIDCommentsResponse:
    comment_created: Optional[shared.CommentCreated] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
