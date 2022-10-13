from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsAddOrUpdateMembershipForUserInOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"


@dataclass_json
@dataclass
class TeamsAddOrUpdateMembershipForUserInOrgRequestBody:
    role: Optional[TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    

@dataclass
class TeamsAddOrUpdateMembershipForUserInOrgRequest:
    path_params: TeamsAddOrUpdateMembershipForUserInOrgPathParams = field(default=None)
    request: Optional[TeamsAddOrUpdateMembershipForUserInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSONErrors:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    

@dataclass_json
@dataclass
class TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSON:
    errors: Optional[List[TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSONErrors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class TeamsAddOrUpdateMembershipForUserInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_membership: Optional[shared.TeamMembership] = field(default=None)
    teams_add_or_update_membership_for_user_in_org_422_application_json_object: Optional[TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSON] = field(default=None)
    
