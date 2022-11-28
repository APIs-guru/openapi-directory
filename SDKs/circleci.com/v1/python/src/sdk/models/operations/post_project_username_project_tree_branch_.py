from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostProjectUsernameProjectTreeBranchPathParams:
    branch: str = field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostProjectUsernameProjectTreeBranchRequestBody:
    build_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_parameters') }})
    parallel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parallel') }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    

@dataclass
class PostProjectUsernameProjectTreeBranchRequest:
    path_params: PostProjectUsernameProjectTreeBranchPathParams = field()
    request: Optional[PostProjectUsernameProjectTreeBranchRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProjectUsernameProjectTreeBranchResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    build: Optional[shared.Build] = field(default=None)
    
