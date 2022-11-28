from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TeamsListProjectsLegacyPathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsListProjectsLegacyQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class TeamsListProjectsLegacy415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class TeamsListProjectsLegacyRequest:
    path_params: TeamsListProjectsLegacyPathParams = field()
    query_params: TeamsListProjectsLegacyQueryParams = field()
    

@dataclass
class TeamsListProjectsLegacyResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    team_projects: Optional[List[shared.TeamProject]] = field(default=None)
    teams_list_projects_legacy_415_application_json_object: Optional[TeamsListProjectsLegacy415ApplicationJSON] = field(default=None)
    
