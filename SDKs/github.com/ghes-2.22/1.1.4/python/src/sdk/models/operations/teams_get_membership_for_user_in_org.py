from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsGetMembershipForUserInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsGetMembershipForUserInOrgRequest:
    path_params: TeamsGetMembershipForUserInOrgPathParams = field()
    

@dataclass
class TeamsGetMembershipForUserInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    team_membership: Optional[shared.TeamMembership] = field(default=None)
    
