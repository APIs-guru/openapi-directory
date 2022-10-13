from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActionsGetReviewsForRunPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(default=None, metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetReviewsForRunRequest:
    path_params: ActionsGetReviewsForRunPathParams = field(default=None)
    

@dataclass
class ActionsGetReviewsForRunResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    environment_approvals: Optional[List[shared.EnvironmentApprovals]] = field(default=None)
    
