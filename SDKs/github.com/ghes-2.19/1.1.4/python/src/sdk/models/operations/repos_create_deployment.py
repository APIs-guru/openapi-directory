from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposCreateDeploymentPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposCreateDeploymentRequestBody:
    ref: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    auto_merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_merge') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    payload: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    production_environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('production_environment') }})
    required_contexts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_contexts') }})
    task: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task') }})
    transient_environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transient_environment') }})
    

@dataclass_json
@dataclass
class ReposCreateDeployment202ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ReposCreateDeploymentRequest:
    path_params: ReposCreateDeploymentPathParams = field()
    request: Optional[ReposCreateDeploymentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateDeploymentResponse:
    content_type: str = field()
    status_code: int = field()
    deployment: Optional[shared.Deployment] = field(default=None)
    repos_create_deployment_202_application_json_object: Optional[ReposCreateDeployment202ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
