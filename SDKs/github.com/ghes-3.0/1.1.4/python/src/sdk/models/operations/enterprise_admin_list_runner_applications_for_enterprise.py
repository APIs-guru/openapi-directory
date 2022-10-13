from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminListRunnerApplicationsForEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminListRunnerApplicationsForEnterpriseRequest:
    path_params: EnterpriseAdminListRunnerApplicationsForEnterprisePathParams = field(default=None)
    

@dataclass
class EnterpriseAdminListRunnerApplicationsForEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    runner_applications: Optional[List[shared.RunnerApplication]] = field(default=None)
    
