from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


REPOS_UPLOAD_RELEASE_ASSET_SERVERS = [
	"https://{origin}",
]


@dataclass
class ReposUploadReleaseAssetPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    release_id: int = field(metadata={'path_param': { 'field_name': 'release_id', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposUploadReleaseAssetQueryParams:
    label: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposUploadReleaseAssetRequest:
    path_params: ReposUploadReleaseAssetPathParams = field()
    query_params: ReposUploadReleaseAssetQueryParams = field()
    request: Optional[str] = field(default=None, metadata={'request': { 'media_type': '*/*' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ReposUploadReleaseAssetResponse:
    content_type: str = field()
    status_code: int = field()
    release_asset: Optional[shared.ReleaseAsset] = field(default=None)
    
