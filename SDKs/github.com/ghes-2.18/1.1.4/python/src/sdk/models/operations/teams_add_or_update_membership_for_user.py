from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsAddOrUpdateMembershipForUserPathParams:
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"


@dataclass_json
@dataclass
class TeamsAddOrUpdateMembershipForUserRequestBody:
    role: Optional[TeamsAddOrUpdateMembershipForUserRequestBodyRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    

@dataclass
class TeamsAddOrUpdateMembershipForUserRequest:
    path_params: TeamsAddOrUpdateMembershipForUserPathParams = field(default=None)
    request: Optional[TeamsAddOrUpdateMembershipForUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsAddOrUpdateMembershipForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_membership: Optional[shared.TeamMembership] = field(default=None)
    
