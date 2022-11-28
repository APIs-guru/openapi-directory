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
class TeamsAddOrUpdateMembershipForUserPathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"


@dataclass_json
@dataclass
class TeamsAddOrUpdateMembershipForUserRequestBody:
    role: Optional[TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    

@dataclass
class TeamsAddOrUpdateMembershipForUserRequest:
    path_params: TeamsAddOrUpdateMembershipForUserPathParams = field()
    request: Optional[TeamsAddOrUpdateMembershipForUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsAddOrUpdateMembershipForUserResponse:
    content_type: str = field()
    status_code: int = field()
    team_membership: Optional[shared.TeamMembership] = field(default=None)
    
