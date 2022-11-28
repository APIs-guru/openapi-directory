from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetSelfHostedRunnerGroupForEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest:
    path_params: EnterpriseAdminGetSelfHostedRunnerGroupForEnterprisePathParams = field()
    

@dataclass
class EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    runner_groups_enterprise: Optional[shared.RunnerGroupsEnterprise] = field(default=None)
    
