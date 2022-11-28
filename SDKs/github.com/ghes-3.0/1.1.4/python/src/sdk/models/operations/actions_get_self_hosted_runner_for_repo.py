from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetSelfHostedRunnerForRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    runner_id: int = field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetSelfHostedRunnerForRepoRequest:
    path_params: ActionsGetSelfHostedRunnerForRepoPathParams = field()
    

@dataclass
class ActionsGetSelfHostedRunnerForRepoResponse:
    content_type: str = field()
    status_code: int = field()
    runner: Optional[shared.Runner] = field(default=None)
    
