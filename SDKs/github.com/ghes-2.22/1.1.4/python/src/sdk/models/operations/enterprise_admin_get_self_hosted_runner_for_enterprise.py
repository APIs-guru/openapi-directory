from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetSelfHostedRunnerForEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest:
    path_params: EnterpriseAdminGetSelfHostedRunnerForEnterprisePathParams = field(default=None)
    

@dataclass
class EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    runner_no_labels: Optional[shared.RunnerNoLabels] = field(default=None)
    
