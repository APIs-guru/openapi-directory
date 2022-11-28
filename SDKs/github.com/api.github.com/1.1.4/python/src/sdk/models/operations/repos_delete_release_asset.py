from dataclasses import dataclass, field



@dataclass
class ReposDeleteReleaseAssetPathParams:
    asset_id: int = field(metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposDeleteReleaseAssetRequest:
    path_params: ReposDeleteReleaseAssetPathParams = field()
    

@dataclass
class ReposDeleteReleaseAssetResponse:
    content_type: str = field()
    status_code: int = field()
    
