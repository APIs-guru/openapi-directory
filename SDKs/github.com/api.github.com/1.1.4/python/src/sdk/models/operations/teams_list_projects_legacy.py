from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsListProjectsLegacyPathParams:
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsListProjectsLegacyQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class TeamsListProjectsLegacyRequest:
    path_params: TeamsListProjectsLegacyPathParams = field(default=None)
    query_params: TeamsListProjectsLegacyQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class TeamsListProjectsLegacy415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class TeamsListProjectsLegacyResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    team_projects: Optional[List[shared.TeamProject]] = field(default=None)
    teams_list_projects_legacy_415_application_json_object: Optional[TeamsListProjectsLegacy415ApplicationJSON] = field(default=None)
    
