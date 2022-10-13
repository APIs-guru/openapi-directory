from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsCheckPermissionsForProjectLegacyPathParams:
    project_id: int = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsCheckPermissionsForProjectLegacyRequest:
    path_params: TeamsCheckPermissionsForProjectLegacyPathParams = field(default=None)
    

@dataclass_json
@dataclass
class TeamsCheckPermissionsForProjectLegacy415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class TeamsCheckPermissionsForProjectLegacyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_project: Optional[shared.TeamProject] = field(default=None)
    teams_check_permissions_for_project_legacy_415_application_json_object: Optional[TeamsCheckPermissionsForProjectLegacy415ApplicationJSON] = field(default=None)
    
