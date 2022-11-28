from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV3BoardsBoardIDCommentsPathParams:
    board_id: str = field(metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV3BoardsBoardIDCommentsRequest:
    path_params: PostV3BoardsBoardIDCommentsPathParams = field()
    request: Optional[shared.CommentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV3BoardsBoardIDCommentsResponse:
    content_type: str = field()
    status_code: int = field()
    comment_created: Optional[shared.CommentCreated] = field(default=None)
    
