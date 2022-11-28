from dataclasses import dataclass, field



@dataclass
class TeamsRemoveRepoLegacyPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsRemoveRepoLegacyRequest:
    path_params: TeamsRemoveRepoLegacyPathParams = field()
    

@dataclass
class TeamsRemoveRepoLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    
