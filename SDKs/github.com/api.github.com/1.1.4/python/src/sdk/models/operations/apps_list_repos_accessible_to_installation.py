from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AppsListReposAccessibleToInstallationQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class AppsListReposAccessibleToInstallationRequest:
    query_params: AppsListReposAccessibleToInstallationQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class AppsListReposAccessibleToInstallation200ApplicationJSON:
    repositories: List[shared.Repository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories' }})
    repository_selection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository_selection' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class AppsListReposAccessibleToInstallationResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    apps_list_repos_accessible_to_installation_200_application_json_object: Optional[AppsListReposAccessibleToInstallation200ApplicationJSON] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
