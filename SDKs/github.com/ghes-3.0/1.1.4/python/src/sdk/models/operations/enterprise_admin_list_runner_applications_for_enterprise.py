from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminListRunnerApplicationsForEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminListRunnerApplicationsForEnterpriseRequest:
    path_params: EnterpriseAdminListRunnerApplicationsForEnterprisePathParams = field()
    

@dataclass
class EnterpriseAdminListRunnerApplicationsForEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    runner_applications: Optional[List[shared.RunnerApplication]] = field(default=None)
    
