from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
REPOS_UPLOAD_RELEASE_ASSET_SERVERS = [
	"https://{origin}",
]


@dataclass
class ReposUploadReleaseAssetPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    release_id: int = field(default=None, metadata={'path_param': { 'field_name': 'release_id', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposUploadReleaseAssetQueryParams:
    label: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposUploadReleaseAssetRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ReposUploadReleaseAssetPathParams = field(default=None)
    query_params: ReposUploadReleaseAssetQueryParams = field(default=None)
    request: Optional[str] = field(default=None, metadata={'request': { 'media_type': '*/*' }})
    

@dataclass
class ReposUploadReleaseAssetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    release_asset: Optional[shared.ReleaseAsset] = field(default=None)
    
