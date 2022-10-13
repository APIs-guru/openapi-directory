from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetV3BoardsBoardIDCommentsPathParams:
    board_id: str = field(default=None, metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3BoardsBoardIDCommentsRequest:
    path_params: GetV3BoardsBoardIDCommentsPathParams = field(default=None)
    

@dataclass
class GetV3BoardsBoardIDCommentsResponse:
    comments_list: Optional[shared.CommentsList] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
