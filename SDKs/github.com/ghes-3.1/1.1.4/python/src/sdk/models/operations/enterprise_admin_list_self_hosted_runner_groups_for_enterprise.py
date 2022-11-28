from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSON:
    runner_groups: List[shared.RunnerGroupsEnterprise] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('runner_groups') }})
    total_count: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass
class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest:
    path_params: EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams = field()
    query_params: EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams = field()
    

@dataclass
class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    enterprise_admin_list_self_hosted_runner_groups_for_enterprise_200_application_json_object: Optional[EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSON] = field(default=None)
    
