from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetSelfHostedRunnerForRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    runner_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetSelfHostedRunnerForRepoRequest:
    path_params: ActionsGetSelfHostedRunnerForRepoPathParams = field(default=None)
    

@dataclass
class ActionsGetSelfHostedRunnerForRepoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    runner: Optional[shared.Runner] = field(default=None)
    
