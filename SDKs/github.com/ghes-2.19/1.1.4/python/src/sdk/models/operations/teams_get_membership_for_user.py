from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsGetMembershipForUserPathParams:
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsGetMembershipForUserRequest:
    path_params: TeamsGetMembershipForUserPathParams = field(default=None)
    

@dataclass
class TeamsGetMembershipForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_membership: Optional[shared.TeamMembership] = field(default=None)
    
