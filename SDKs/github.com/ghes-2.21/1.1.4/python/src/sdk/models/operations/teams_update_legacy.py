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
class TeamsUpdateLegacyPathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    
class TeamsUpdateLegacyRequestBodyPermissionEnum(str, Enum):
    PULL = "pull"
    PUSH = "push"
    ADMIN = "admin"

class TeamsUpdateLegacyRequestBodyPrivacyEnum(str, Enum):
    SECRET = "secret"
    CLOSED = "closed"


@dataclass_json
@dataclass
class TeamsUpdateLegacyRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    parent_team_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_team_id') }})
    permission: Optional[TeamsUpdateLegacyRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    privacy: Optional[TeamsUpdateLegacyRequestBodyPrivacyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclass
class TeamsUpdateLegacyRequest:
    path_params: TeamsUpdateLegacyPathParams = field()
    request: Optional[TeamsUpdateLegacyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsUpdateLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    team_full: Optional[shared.TeamFull] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
