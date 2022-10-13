from dataclasses import dataclass, field



@dataclass
class ReposDeleteReleaseAssetPathParams:
    asset_id: int = field(default=None, metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposDeleteReleaseAssetRequest:
    path_params: ReposDeleteReleaseAssetPathParams = field(default=None)
    

@dataclass
class ReposDeleteReleaseAssetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
