from dataclasses import dataclass, field



@dataclass
class PutV3BoardsBoardIDAssetsAssetIDPathParams:
    asset_id: str = field(metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    board_id: str = field(metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutV3BoardsBoardIDAssetsAssetIDRequest:
    path_params: PutV3BoardsBoardIDAssetsAssetIDPathParams = field()
    

@dataclass
class PutV3BoardsBoardIDAssetsAssetIDResponse:
    content_type: str = field()
    status_code: int = field()
    
