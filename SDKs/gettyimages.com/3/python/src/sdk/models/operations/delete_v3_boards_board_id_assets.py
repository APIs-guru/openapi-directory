from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DeleteV3BoardsBoardIDAssetsPathParams:
    board_id: str = field(metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteV3BoardsBoardIDAssetsQueryParams:
    asset_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'asset_ids', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteV3BoardsBoardIDAssetsRequest:
    path_params: DeleteV3BoardsBoardIDAssetsPathParams = field()
    query_params: DeleteV3BoardsBoardIDAssetsQueryParams = field()
    

@dataclass
class DeleteV3BoardsBoardIDAssetsResponse:
    content_type: str = field()
    status_code: int = field()
    
