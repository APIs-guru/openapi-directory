from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutV3BoardsBoardIDPathParams:
    board_id: str = field(default=None, metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutV3BoardsBoardIDRequest:
    path_params: PutV3BoardsBoardIDPathParams = field(default=None)
    request: Optional[shared.BoardInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutV3BoardsBoardIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
