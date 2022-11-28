from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsCheckPermissionsForProjectPathParams:
    project_id: int = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsCheckPermissionsForProjectHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsCheckPermissionsForProjectRequest:
    headers: TeamsCheckPermissionsForProjectHeaders = field()
    path_params: TeamsCheckPermissionsForProjectPathParams = field()
    

@dataclass
class TeamsCheckPermissionsForProjectResponse:
    content_type: str = field()
    status_code: int = field()
    team_project: Optional[shared.TeamProject] = field(default=None)
    
