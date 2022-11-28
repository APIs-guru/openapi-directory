from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PullsCreatePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PullsCreateRequestBody:
    base: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    head: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    draft: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('draft') }})
    issue: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue') }})
    maintainer_can_modify: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintainer_can_modify') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass
class PullsCreateRequest:
    path_params: PullsCreatePathParams = field()
    request: Optional[PullsCreateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PullsCreateResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    pull_request: Optional[shared.PullRequest] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
