from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsCheckPermissionsForProjectPathParams:
    project_id: int = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsCheckPermissionsForProjectHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsCheckPermissionsForProjectRequest:
    path_params: TeamsCheckPermissionsForProjectPathParams = field(default=None)
    headers: TeamsCheckPermissionsForProjectHeaders = field(default=None)
    

@dataclass
class TeamsCheckPermissionsForProjectResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_project: Optional[shared.TeamProject] = field(default=None)
    
