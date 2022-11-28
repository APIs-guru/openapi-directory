from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TeamsUpdatePathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    
class TeamsUpdateRequestBodyPermissionEnum(str, Enum):
    PULL = "pull"
    PUSH = "push"
    ADMIN = "admin"

class TeamsUpdateRequestBodyPrivacyEnum(str, Enum):
    SECRET = "secret"
    CLOSED = "closed"


@dataclass_json
@dataclass
class TeamsUpdateRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_team_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_team_id') }})
    permission: Optional[TeamsUpdateRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    privacy: Optional[TeamsUpdateRequestBodyPrivacyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclass
class TeamsUpdateRequest:
    path_params: TeamsUpdatePathParams = field()
    request: Optional[TeamsUpdateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    team_full: Optional[shared.TeamFull] = field(default=None)
    
