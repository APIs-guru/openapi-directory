from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GitCreateRefPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GitCreateRefRequestBody:
    ref: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    

@dataclass
class GitCreateRefRequest:
    path_params: GitCreateRefPathParams = field()
    request: Optional[GitCreateRefRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GitCreateRefResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    git_ref: Optional[shared.GitRef] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
