from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActionsListRunnerApplicationsForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListRunnerApplicationsForOrgRequest:
    path_params: ActionsListRunnerApplicationsForOrgPathParams = field()
    

@dataclass
class ActionsListRunnerApplicationsForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    runner_applications: Optional[List[shared.RunnerApplication]] = field(default=None)
    
