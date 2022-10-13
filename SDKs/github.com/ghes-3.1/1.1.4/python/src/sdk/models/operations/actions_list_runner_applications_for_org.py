from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActionsListRunnerApplicationsForOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListRunnerApplicationsForOrgRequest:
    path_params: ActionsListRunnerApplicationsForOrgPathParams = field(default=None)
    

@dataclass
class ActionsListRunnerApplicationsForOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    runner_applications: Optional[List[shared.RunnerApplication]] = field(default=None)
    
