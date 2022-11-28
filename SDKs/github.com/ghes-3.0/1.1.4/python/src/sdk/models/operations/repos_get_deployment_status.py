from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposGetDeploymentStatusPathParams:
    deployment_id: int = field(metadata={'path_param': { 'field_name': 'deployment_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    status_id: int = field(metadata={'path_param': { 'field_name': 'status_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposGetDeploymentStatus415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ReposGetDeploymentStatusRequest:
    path_params: ReposGetDeploymentStatusPathParams = field()
    

@dataclass
class ReposGetDeploymentStatusResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    deployment_status: Optional[shared.DeploymentStatus] = field(default=None)
    repos_get_deployment_status_415_application_json_object: Optional[ReposGetDeploymentStatus415ApplicationJSON] = field(default=None)
    
