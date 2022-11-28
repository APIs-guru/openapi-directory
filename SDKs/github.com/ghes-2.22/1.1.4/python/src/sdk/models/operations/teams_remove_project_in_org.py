from dataclasses import dataclass, field



@dataclass
class TeamsRemoveProjectInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    project_id: int = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsRemoveProjectInOrgRequest:
    path_params: TeamsRemoveProjectInOrgPathParams = field()
    

@dataclass
class TeamsRemoveProjectInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    
