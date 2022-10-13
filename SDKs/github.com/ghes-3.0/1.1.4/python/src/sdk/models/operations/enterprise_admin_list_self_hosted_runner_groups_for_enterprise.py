from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest:
    path_params: EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams = field(default=None)
    query_params: EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSON:
    runner_groups: List[shared.RunnerGroupsEnterprise] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runner_groups' }})
    total_count: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    enterprise_admin_list_self_hosted_runner_groups_for_enterprise_200_application_json_object: Optional[EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSON] = field(default=None)
    
