from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest:
    path_params: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams = field(default=None)
    query_params: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSON:
    organizations: List[shared.OrganizationSimple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations' }})
    total_count: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    enterprise_admin_list_org_access_to_self_hosted_runner_group_in_enterprise_200_application_json_object: Optional[EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSON] = field(default=None)
    
