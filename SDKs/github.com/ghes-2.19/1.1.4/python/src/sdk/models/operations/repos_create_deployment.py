from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposCreateDeploymentPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposCreateDeploymentRequestBody:
    auto_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_merge' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    payload: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    production_environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'production_environment' }})
    ref: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref' }})
    required_contexts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_contexts' }})
    task: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task' }})
    transient_environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transient_environment' }})
    

@dataclass
class ReposCreateDeploymentRequest:
    path_params: ReposCreateDeploymentPathParams = field(default=None)
    request: Optional[ReposCreateDeploymentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class ReposCreateDeployment202ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ReposCreateDeploymentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    deployment: Optional[shared.Deployment] = field(default=None)
    repos_create_deployment_202_application_json_object: Optional[ReposCreateDeployment202ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
