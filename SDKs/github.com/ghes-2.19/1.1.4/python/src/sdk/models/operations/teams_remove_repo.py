from dataclasses import dataclass, field



@dataclass
class TeamsRemoveRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsRemoveRepoRequest:
    path_params: TeamsRemoveRepoPathParams = field(default=None)
    

@dataclass
class TeamsRemoveRepoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
