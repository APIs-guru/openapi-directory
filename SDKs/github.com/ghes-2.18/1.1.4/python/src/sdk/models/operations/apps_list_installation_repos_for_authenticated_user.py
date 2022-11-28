from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AppsListInstallationReposForAuthenticatedUserPathParams:
    installation_id: int = field(metadata={'path_param': { 'field_name': 'installation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsListInstallationReposForAuthenticatedUserQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class AppsListInstallationReposForAuthenticatedUserHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AppsListInstallationReposForAuthenticatedUser200ApplicationJSON:
    repositories: List[shared.Repository] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    repository_selection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_selection') }})
    

@dataclass
class AppsListInstallationReposForAuthenticatedUserRequest:
    headers: AppsListInstallationReposForAuthenticatedUserHeaders = field()
    path_params: AppsListInstallationReposForAuthenticatedUserPathParams = field()
    query_params: AppsListInstallationReposForAuthenticatedUserQueryParams = field()
    

@dataclass
class AppsListInstallationReposForAuthenticatedUserResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    apps_list_installation_repos_for_authenticated_user_200_application_json_object: Optional[AppsListInstallationReposForAuthenticatedUser200ApplicationJSON] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
