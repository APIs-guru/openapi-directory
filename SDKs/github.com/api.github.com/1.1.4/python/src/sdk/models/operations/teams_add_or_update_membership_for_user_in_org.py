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
    

@dataclass_json
@dataclass
class TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSONErrors:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    

@dataclass_json
@dataclass
class TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSON:
    errors: Optional[List[TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSONErrors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class TeamsAddOrUpdateMembershipForUserInOrgRequest:
    path_params: TeamsAddOrUpdateMembershipForUserInOrgPathParams = field()
    request: Optional[TeamsAddOrUpdateMembershipForUserInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsAddOrUpdateMembershipForUserInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    team_membership: Optional[shared.TeamMembership] = field(default=None)
    teams_add_or_update_membership_for_user_in_org_422_application_json_object: Optional[TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSON] = field(default=None)
    
