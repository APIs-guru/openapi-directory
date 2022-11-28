from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSON:
    organizations: List[shared.OrganizationSimple] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations') }})
    total_count: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass
class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest:
    path_params: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams = field()
    query_params: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams = field()
    

@dataclass
class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    enterprise_admin_list_selected_organizations_enabled_github_actions_enterprise_200_application_json_object: Optional[EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSON] = field(default=None)
    
