from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsAddOrUpdateMembershipForUserLegacyPathParams:
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"


@dataclass_json
@dataclass
class TeamsAddOrUpdateMembershipForUserLegacyRequestBody:
    role: Optional[TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    

@dataclass
class TeamsAddOrUpdateMembershipForUserLegacyRequest:
    path_params: TeamsAddOrUpdateMembershipForUserLegacyPathParams = field(default=None)
    request: Optional[TeamsAddOrUpdateMembershipForUserLegacyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsAddOrUpdateMembershipForUserLegacyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    team_membership: Optional[shared.TeamMembership] = field(default=None)
    
