from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest:
    path_params: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams = field(default=None)
    query_params: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSON:
    organizations: List[shared.OrganizationSimple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations' }})
    total_count: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    enterprise_admin_list_selected_organizations_enabled_github_actions_enterprise_200_application_json_object: Optional[EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSON] = field(default=None)
    
