from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ActionsReviewPendingDeploymentsForRunPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    
class ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum(str, Enum):
    APPROVED = "approved"
    REJECTED = "rejected"


@dataclass_json
@dataclass
class ActionsReviewPendingDeploymentsForRunRequestBody:
    comment: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    environment_ids: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment_ids') }})
    state: ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass
class ActionsReviewPendingDeploymentsForRunRequest:
    path_params: ActionsReviewPendingDeploymentsForRunPathParams = field()
    request: Optional[ActionsReviewPendingDeploymentsForRunRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsReviewPendingDeploymentsForRunResponse:
    content_type: str = field()
    status_code: int = field()
    deployments: Optional[List[shared.Deployment]] = field(default=None)
    
