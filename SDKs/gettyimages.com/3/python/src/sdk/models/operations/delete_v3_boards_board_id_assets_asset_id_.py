from dataclasses import dataclass, field



@dataclass
class DeleteV3BoardsBoardIDAssetsAssetIDPathParams:
    asset_id: str = field(metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    board_id: str = field(metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteV3BoardsBoardIDAssetsAssetIDRequest:
    path_params: DeleteV3BoardsBoardIDAssetsAssetIDPathParams = field()
    

@dataclass
class DeleteV3BoardsBoardIDAssetsAssetIDResponse:
    content_type: str = field()
    status_code: int = field()
    
