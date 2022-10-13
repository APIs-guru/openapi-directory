from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetSelfHostedRunnerForOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetSelfHostedRunnerForOrgRequest:
    path_params: ActionsGetSelfHostedRunnerForOrgPathParams = field(default=None)
    

@dataclass
class ActionsGetSelfHostedRunnerForOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    runner: Optional[shared.Runner] = field(default=None)
    
