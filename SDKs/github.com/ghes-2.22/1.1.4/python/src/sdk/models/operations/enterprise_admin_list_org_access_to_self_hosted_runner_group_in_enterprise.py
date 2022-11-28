from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSON:
    organizations: List[shared.OrganizationSimple] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations') }})
    total_count: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass
class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest:
    path_params: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams = field()
    query_params: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams = field()
    

@dataclass
class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    enterprise_admin_list_org_access_to_self_hosted_runner_group_in_enterprise_200_application_json_object: Optional[EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSON] = field(default=None)
    
