from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AppsListReposAccessibleToInstallationQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AppsListReposAccessibleToInstallation200ApplicationJSON:
    repositories: List[shared.Repository] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    repository_selection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_selection') }})
    

@dataclass
class AppsListReposAccessibleToInstallationRequest:
    query_params: AppsListReposAccessibleToInstallationQueryParams = field()
    

@dataclass
class AppsListReposAccessibleToInstallationResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    apps_list_repos_accessible_to_installation_200_application_json_object: Optional[AppsListReposAccessibleToInstallation200ApplicationJSON] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
