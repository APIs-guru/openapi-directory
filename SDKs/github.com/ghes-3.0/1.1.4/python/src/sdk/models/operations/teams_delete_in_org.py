from dataclasses import dataclass, field



@dataclass
class TeamsDeleteInOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteInOrgRequest:
    path_params: TeamsDeleteInOrgPathParams = field(default=None)
    

@dataclass
class TeamsDeleteInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
