from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetSelfHostedRunnerForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_id: int = field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetSelfHostedRunnerForOrgRequest:
    path_params: ActionsGetSelfHostedRunnerForOrgPathParams = field()
    

@dataclass
class ActionsGetSelfHostedRunnerForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    runner: Optional[shared.Runner] = field(default=None)
    
