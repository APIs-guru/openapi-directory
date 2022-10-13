from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposUpdateReleaseAssetPathParams:
    asset_id: int = field(default=None, metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposUpdateReleaseAssetRequestBody:
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass
class ReposUpdateReleaseAssetRequest:
    path_params: ReposUpdateReleaseAssetPathParams = field(default=None)
    request: Optional[ReposUpdateReleaseAssetRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposUpdateReleaseAssetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    release_asset: Optional[shared.ReleaseAsset] = field(default=None)
    
