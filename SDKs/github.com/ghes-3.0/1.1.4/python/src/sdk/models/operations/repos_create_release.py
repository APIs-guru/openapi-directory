from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposCreateReleasePathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposCreateReleaseRequestBody:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    draft: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'draft' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prerelease: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prerelease' }})
    tag_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag_name' }})
    target_commitish: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_commitish' }})
    

@dataclass
class ReposCreateReleaseRequest:
    path_params: ReposCreateReleasePathParams = field(default=None)
    request: Optional[ReposCreateReleaseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateReleaseResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    release: Optional[shared.Release] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
