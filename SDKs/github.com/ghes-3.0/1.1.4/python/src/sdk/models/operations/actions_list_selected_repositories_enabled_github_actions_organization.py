from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest:
    path_params: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams = field(default=None)
    query_params: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSON:
    repositories: List[shared.Repository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories' }})
    total_count: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    actions_list_selected_repositories_enabled_github_actions_organization_200_application_json_object: Optional[ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSON] = field(default=None)
    
