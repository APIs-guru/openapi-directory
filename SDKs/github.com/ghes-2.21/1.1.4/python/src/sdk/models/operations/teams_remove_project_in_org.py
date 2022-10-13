from dataclasses import dataclass, field



@dataclass
class TeamsRemoveProjectInOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    project_id: int = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsRemoveProjectInOrgRequest:
    path_params: TeamsRemoveProjectInOrgPathParams = field(default=None)
    

@dataclass
class TeamsRemoveProjectInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
