from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV3BoardsBoardIDCommentsPathParams:
    board_id: str = field(metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3BoardsBoardIDCommentsRequest:
    path_params: GetV3BoardsBoardIDCommentsPathParams = field()
    

@dataclass
class GetV3BoardsBoardIDCommentsResponse:
    content_type: str = field()
    status_code: int = field()
    comments_list: Optional[shared.CommentsList] = field(default=None)
    
