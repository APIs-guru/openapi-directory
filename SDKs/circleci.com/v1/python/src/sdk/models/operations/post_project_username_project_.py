from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostProjectUsernameProjectPathParams:
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostProjectUsernameProjectRequestBody:
    build_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_parameters') }})
    parallel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parallel') }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass
class PostProjectUsernameProjectRequest:
    path_params: PostProjectUsernameProjectPathParams = field()
    request: Optional[PostProjectUsernameProjectRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProjectUsernameProjectResponse:
    content_type: str = field()
    status_code: int = field()
    build_summary: Optional[shared.BuildSummary] = field(default=None)
    
