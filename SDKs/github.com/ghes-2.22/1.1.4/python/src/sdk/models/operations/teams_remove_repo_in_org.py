from dataclasses import dataclass, field



@dataclass
class TeamsRemoveRepoInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsRemoveRepoInOrgRequest:
    path_params: TeamsRemoveRepoInOrgPathParams = field()
    

@dataclass
class TeamsRemoveRepoInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    
