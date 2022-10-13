from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposGetDeploymentStatusPathParams:
    deployment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'deployment_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    status_id: int = field(default=None, metadata={'path_param': { 'field_name': 'status_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetDeploymentStatusRequest:
    path_params: ReposGetDeploymentStatusPathParams = field(default=None)
    

@dataclass_json
@dataclass
class ReposGetDeploymentStatus415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ReposGetDeploymentStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    deployment_status: Optional[shared.DeploymentStatus] = field(default=None)
    repos_get_deployment_status_415_application_json_object: Optional[ReposGetDeploymentStatus415ApplicationJSON] = field(default=None)
    
