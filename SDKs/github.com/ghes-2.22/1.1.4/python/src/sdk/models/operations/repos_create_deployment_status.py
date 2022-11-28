from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposCreateDeploymentStatusPathParams:
    deployment_id: int = field(metadata={'path_param': { 'field_name': 'deployment_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ReposCreateDeploymentStatusRequestBodyEnvironmentEnum(str, Enum):
    PRODUCTION = "production"
    STAGING = "staging"
    QA = "qa"

class ReposCreateDeploymentStatusRequestBodyStateEnum(str, Enum):
    ERROR = "error"
    FAILURE = "failure"
    INACTIVE = "inactive"
    IN_PROGRESS = "in_progress"
    QUEUED = "queued"
    PENDING = "pending"
    SUCCESS = "success"


@dataclass_json
@dataclass
class ReposCreateDeploymentStatusRequestBody:
    state: ReposCreateDeploymentStatusRequestBodyStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    auto_inactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_inactive') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    environment: Optional[ReposCreateDeploymentStatusRequestBodyEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    environment_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment_url') }})
    log_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('log_url') }})
    target_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_url') }})
    

@dataclass
class ReposCreateDeploymentStatusRequest:
    path_params: ReposCreateDeploymentStatusPathParams = field()
    request: Optional[ReposCreateDeploymentStatusRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateDeploymentStatusResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    deployment_status: Optional[shared.DeploymentStatus] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
