from dataclasses import dataclass, field
from typing import Enum,Optional
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
    

@dataclass
class TeamsAddOrUpdateMembershipForUserInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_membership: Optional[shared.TeamMembership] = field(default=None)
    
