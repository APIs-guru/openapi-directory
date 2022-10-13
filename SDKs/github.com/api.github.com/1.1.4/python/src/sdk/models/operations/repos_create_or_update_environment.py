from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposCreateOrUpdateEnvironmentPathParams:
    environment_name: str = field(default=None, metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposCreateOrUpdateEnvironmentRequestBodyReviewers:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[shared.DeploymentReviewerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class ReposCreateOrUpdateEnvironmentRequestBody:
    deployment_branch_policy: Optional[shared.DeploymentBranchPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployment_branch_policy' }})
    reviewers: Optional[List[ReposCreateOrUpdateEnvironmentRequestBodyReviewers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewers' }})
    wait_timer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wait_timer' }})
    

@dataclass
class ReposCreateOrUpdateEnvironmentRequest:
    path_params: ReposCreateOrUpdateEnvironmentPathParams = field(default=None)
    request: Optional[ReposCreateOrUpdateEnvironmentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateOrUpdateEnvironmentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    environment: Optional[shared.Environment] = field(default=None)
    
