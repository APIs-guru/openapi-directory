from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PutV3BoardsBoardIDAssetsPathParams:
    board_id: str = field(default=None, metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutV3BoardsBoardIDAssetsRequest:
    path_params: PutV3BoardsBoardIDAssetsPathParams = field(default=None)
    request: Optional[List[shared.BoardAsset]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutV3BoardsBoardIDAssetsResponse:
    add_board_assets_result: Optional[shared.AddBoardAssetsResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
