from dataclasses import dataclass, field



@dataclass
class TeamsDeleteInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteInOrgRequest:
    path_params: TeamsDeleteInOrgPathParams = field()
    

@dataclass
class TeamsDeleteInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    
