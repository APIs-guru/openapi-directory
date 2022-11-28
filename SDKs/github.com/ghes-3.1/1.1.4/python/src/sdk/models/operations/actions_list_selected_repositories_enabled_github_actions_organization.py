from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSON:
    repositories: List[shared.Repository] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    total_count: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass
class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest:
    path_params: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams = field()
    query_params: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams = field()
    

@dataclass
class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    actions_list_selected_repositories_enabled_github_actions_organization_200_application_json_object: Optional[ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSON] = field(default=None)
    
