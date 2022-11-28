from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposCreateReleasePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposCreateReleaseRequestBody:
    tag_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag_name') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    draft: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('draft') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prerelease: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prerelease') }})
    target_commitish: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_commitish') }})
    

@dataclass
class ReposCreateReleaseRequest:
    path_params: ReposCreateReleasePathParams = field()
    request: Optional[ReposCreateReleaseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateReleaseResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    release: Optional[shared.Release] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
