from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActionsGetPendingDeploymentsForRunPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(default=None, metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetPendingDeploymentsForRunRequest:
    path_params: ActionsGetPendingDeploymentsForRunPathParams = field(default=None)
    

@dataclass
class ActionsGetPendingDeploymentsForRunResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    pending_deployments: Optional[List[shared.PendingDeployment]] = field(default=None)
    
