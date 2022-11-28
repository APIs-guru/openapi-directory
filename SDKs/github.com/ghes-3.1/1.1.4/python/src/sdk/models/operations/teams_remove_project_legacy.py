from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TeamsRemoveProjectLegacyPathParams:
    project_id: int = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsRemoveProjectLegacy415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class TeamsRemoveProjectLegacyRequest:
    path_params: TeamsRemoveProjectLegacyPathParams = field()
    

@dataclass
class TeamsRemoveProjectLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    teams_remove_project_legacy_415_application_json_object: Optional[TeamsRemoveProjectLegacy415ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
