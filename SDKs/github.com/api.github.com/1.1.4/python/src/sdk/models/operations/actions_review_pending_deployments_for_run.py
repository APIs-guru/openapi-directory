from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsReviewPendingDeploymentsForRunPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(default=None, metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    
class ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum(str, Enum):
    APPROVED = "approved"
    REJECTED = "rejected"


@dataclass_json
@dataclass
class ActionsReviewPendingDeploymentsForRunRequestBody:
    comment: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    environment_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment_ids' }})
    state: ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass
class ActionsReviewPendingDeploymentsForRunRequest:
    path_params: ActionsReviewPendingDeploymentsForRunPathParams = field(default=None)
    request: Optional[ActionsReviewPendingDeploymentsForRunRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsReviewPendingDeploymentsForRunResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    deployments: Optional[List[shared.Deployment]] = field(default=None)
    
