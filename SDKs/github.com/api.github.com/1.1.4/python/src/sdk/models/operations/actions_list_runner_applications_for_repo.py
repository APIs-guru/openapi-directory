from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActionsListRunnerApplicationsForRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListRunnerApplicationsForRepoRequest:
    path_params: ActionsListRunnerApplicationsForRepoPathParams = field(default=None)
    

@dataclass
class ActionsListRunnerApplicationsForRepoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    runner_applications: Optional[List[shared.RunnerApplication]] = field(default=None)
    
