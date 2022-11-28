from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV3BoardsBoardIDPathParams:
    board_id: str = field(metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3BoardsBoardIDRequest:
    path_params: GetV3BoardsBoardIDPathParams = field()
    

@dataclass
class GetV3BoardsBoardIDResponse:
    content_type: str = field()
    status_code: int = field()
    board_detail: Optional[shared.BoardDetail] = field(default=None)
    
