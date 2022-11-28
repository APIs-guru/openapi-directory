from dataclasses import dataclass, field



@dataclass
class TeamsRemoveMembershipForUserInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsRemoveMembershipForUserInOrgRequest:
    path_params: TeamsRemoveMembershipForUserInOrgPathParams = field()
    

@dataclass
class TeamsRemoveMembershipForUserInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    
