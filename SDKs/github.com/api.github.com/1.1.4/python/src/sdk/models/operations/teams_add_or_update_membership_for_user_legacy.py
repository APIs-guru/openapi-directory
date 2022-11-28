from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TeamsAddOrUpdateMembershipForUserLegacyPathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"


@dataclass_json
@dataclass
class TeamsAddOrUpdateMembershipForUserLegacyRequestBody:
    role: Optional[TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    

@dataclass_json
@dataclass
class TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJSONErrors:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    

@dataclass_json
@dataclass
class TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJSON:
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    errors: Optional[List[TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJSONErrors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class TeamsAddOrUpdateMembershipForUserLegacyRequest:
    path_params: TeamsAddOrUpdateMembershipForUserLegacyPathParams = field()
    request: Optional[TeamsAddOrUpdateMembershipForUserLegacyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsAddOrUpdateMembershipForUserLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    team_membership: Optional[shared.TeamMembership] = field(default=None)
    teams_add_or_update_membership_for_user_legacy_422_application_json_object: Optional[TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJSON] = field(default=None)
    
