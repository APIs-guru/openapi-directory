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
    
