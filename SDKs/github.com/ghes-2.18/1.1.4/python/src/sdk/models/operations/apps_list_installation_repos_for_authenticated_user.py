from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AppsListInstallationReposForAuthenticatedUserPathParams:
    installation_id: int = field(default=None, metadata={'path_param': { 'field_name': 'installation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsListInstallationReposForAuthenticatedUserQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class AppsListInstallationReposForAuthenticatedUserHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept' }})
    

@dataclass
class AppsListInstallationReposForAuthenticatedUserRequest:
    path_params: AppsListInstallationReposForAuthenticatedUserPathParams = field(default=None)
    query_params: AppsListInstallationReposForAuthenticatedUserQueryParams = field(default=None)
    headers: AppsListInstallationReposForAuthenticatedUserHeaders = field(default=None)
    

@dataclass_json
@dataclass
class AppsListInstallationReposForAuthenticatedUser200ApplicationJSON:
    repositories: List[shared.Repository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories' }})
    repository_selection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository_selection' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class AppsListInstallationReposForAuthenticatedUserResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    apps_list_installation_repos_for_authenticated_user_200_application_json_object: Optional[AppsListInstallationReposForAuthenticatedUser200ApplicationJSON] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
