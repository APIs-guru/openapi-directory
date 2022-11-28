from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActionsGetPendingDeploymentsForRunPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetPendingDeploymentsForRunRequest:
    path_params: ActionsGetPendingDeploymentsForRunPathParams = field()
    

@dataclass
class ActionsGetPendingDeploymentsForRunResponse:
    content_type: str = field()
    status_code: int = field()
    pending_deployments: Optional[List[shared.PendingDeployment]] = field(default=None)
    
