from dataclasses import dataclass, field



@dataclass
class TeamsRemoveProjectPathParams:
    project_id: int = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsRemoveProjectRequest:
    path_params: TeamsRemoveProjectPathParams = field()
    

@dataclass
class TeamsRemoveProjectResponse:
    content_type: str = field()
    status_code: int = field()
    
