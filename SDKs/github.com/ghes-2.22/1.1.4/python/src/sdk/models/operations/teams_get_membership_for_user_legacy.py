from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsGetMembershipForUserLegacyPathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsGetMembershipForUserLegacyRequest:
    path_params: TeamsGetMembershipForUserLegacyPathParams = field()
    

@dataclass
class TeamsGetMembershipForUserLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    team_membership: Optional[shared.TeamMembership] = field(default=None)
    
