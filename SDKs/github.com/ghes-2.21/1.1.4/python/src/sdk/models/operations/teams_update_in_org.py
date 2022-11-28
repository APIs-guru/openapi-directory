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
class TeamsUpdateInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    
class TeamsUpdateInOrgRequestBodyPermissionEnum(str, Enum):
    PULL = "pull"
    PUSH = "push"
    ADMIN = "admin"

class TeamsUpdateInOrgRequestBodyPrivacyEnum(str, Enum):
    SECRET = "secret"
    CLOSED = "closed"


@dataclass_json
@dataclass
class TeamsUpdateInOrgRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_team_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_team_id') }})
    permission: Optional[TeamsUpdateInOrgRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    privacy: Optional[TeamsUpdateInOrgRequestBodyPrivacyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    

@dataclass
class TeamsUpdateInOrgRequest:
    path_params: TeamsUpdateInOrgPathParams = field()
    request: Optional[TeamsUpdateInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsUpdateInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    team_full: Optional[shared.TeamFull] = field(default=None)
    
