from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposCreateDeploymentStatusPathParams:
    deployment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'deployment_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
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
    auto_inactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_inactive' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    environment: Optional[ReposCreateDeploymentStatusRequestBodyEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    environment_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment_url' }})
    log_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'log_url' }})
    state: ReposCreateDeploymentStatusRequestBodyStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    target_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_url' }})
    

@dataclass
class ReposCreateDeploymentStatusRequest:
    path_params: ReposCreateDeploymentStatusPathParams = field(default=None)
    request: Optional[ReposCreateDeploymentStatusRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateDeploymentStatusResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    deployment_status: Optional[shared.DeploymentStatus] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
