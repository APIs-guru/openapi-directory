from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TeamsCreatePathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class TeamsCreateRequestBodyPermissionEnum(str, Enum):
    PULL = "pull"
    PUSH = "push"
    ADMIN = "admin"

class TeamsCreateRequestBodyPrivacyEnum(str, Enum):
    SECRET = "secret"
    CLOSED = "closed"


@dataclass_json
@dataclass
class TeamsCreateRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    maintainers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintainers') }})
    parent_team_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_team_id') }})
    permission: Optional[TeamsCreateRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    privacy: Optional[TeamsCreateRequestBodyPrivacyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    repo_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo_names') }})
    

@dataclass
class TeamsCreateRequest:
    path_params: TeamsCreatePathParams = field()
    request: Optional[TeamsCreateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    team_full: Optional[shared.TeamFull] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
