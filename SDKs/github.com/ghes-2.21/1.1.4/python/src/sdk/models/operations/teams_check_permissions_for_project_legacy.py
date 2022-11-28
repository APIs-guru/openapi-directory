from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TeamsCheckPermissionsForProjectLegacyPathParams:
    project_id: int = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsCheckPermissionsForProjectLegacy415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class TeamsCheckPermissionsForProjectLegacyRequest:
    path_params: TeamsCheckPermissionsForProjectLegacyPathParams = field()
    

@dataclass
class TeamsCheckPermissionsForProjectLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    team_project: Optional[shared.TeamProject] = field(default=None)
    teams_check_permissions_for_project_legacy_415_application_json_object: Optional[TeamsCheckPermissionsForProjectLegacy415ApplicationJSON] = field(default=None)
    
