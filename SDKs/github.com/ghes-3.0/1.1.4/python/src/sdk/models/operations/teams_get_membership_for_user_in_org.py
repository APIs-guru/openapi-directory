from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsGetMembershipForUserInOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsGetMembershipForUserInOrgRequest:
    path_params: TeamsGetMembershipForUserInOrgPathParams = field(default=None)
    

@dataclass
class TeamsGetMembershipForUserInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_membership: Optional[shared.TeamMembership] = field(default=None)
    
