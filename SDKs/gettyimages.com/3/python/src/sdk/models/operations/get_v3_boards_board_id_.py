from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV3BoardsBoardIDPathParams:
    board_id: str = field(default=None, metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3BoardsBoardIDRequest:
    path_params: GetV3BoardsBoardIDPathParams = field(default=None)
    

@dataclass
class GetV3BoardsBoardIDResponse:
    board_detail: Optional[shared.BoardDetail] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
