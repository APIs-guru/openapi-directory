from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposUpdateReleasePathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    release_id: int = field(default=None, metadata={'path_param': { 'field_name': 'release_id', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposUpdateReleaseRequestBody:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    draft: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'draft' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prerelease: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prerelease' }})
    tag_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag_name' }})
    target_commitish: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_commitish' }})
    

@dataclass
class ReposUpdateReleaseRequest:
    path_params: ReposUpdateReleasePathParams = field(default=None)
    request: Optional[ReposUpdateReleaseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposUpdateReleaseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    release: Optional[shared.Release] = field(default=None)
    
