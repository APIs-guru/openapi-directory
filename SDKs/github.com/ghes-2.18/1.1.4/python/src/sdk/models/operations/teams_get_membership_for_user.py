from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsGetMembershipForUserPathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsGetMembershipForUserRequest:
    path_params: TeamsGetMembershipForUserPathParams = field()
    

@dataclass
class TeamsGetMembershipForUserResponse:
    content_type: str = field()
    status_code: int = field()
    team_membership: Optional[shared.TeamMembership] = field(default=None)
    
