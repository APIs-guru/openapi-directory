from dataclasses import dataclass, field



@dataclass
class TeamsRemoveMembershipForUserInOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsRemoveMembershipForUserInOrgRequest:
    path_params: TeamsRemoveMembershipForUserInOrgPathParams = field(default=None)
    

@dataclass
class TeamsRemoveMembershipForUserInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
