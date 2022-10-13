from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposGetReleaseAssetPathParams:
    asset_id: int = field(default=None, metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetReleaseAssetRequest:
    path_params: ReposGetReleaseAssetPathParams = field(default=None)
    

@dataclass_json
@dataclass
class ReposGetReleaseAsset415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ReposGetReleaseAssetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    release_asset: Optional[shared.ReleaseAsset] = field(default=None)
    repos_get_release_asset_415_application_json_object: Optional[ReposGetReleaseAsset415ApplicationJSON] = field(default=None)
    
