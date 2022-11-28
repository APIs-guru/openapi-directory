from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetSelfHostedRunnerForEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_id: int = field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest:
    path_params: EnterpriseAdminGetSelfHostedRunnerForEnterprisePathParams = field()
    

@dataclass
class EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    runner_no_labels: Optional[shared.RunnerNoLabels] = field(default=None)
    
