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
class TeamsAddOrUpdateMembershipForUserInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"


@dataclass_json
@dataclass
class TeamsAddOrUpdateMembershipForUserInOrgRequestBody:
    role: Optional[TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    

@dataclass
class TeamsAddOrUpdateMembershipForUserInOrgRequest:
    path_params: TeamsAddOrUpdateMembershipForUserInOrgPathParams = field()
    request: Optional[TeamsAddOrUpdateMembershipForUserInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsAddOrUpdateMembershipForUserInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    team_membership: Optional[shared.TeamMembership] = field(default=None)
    
