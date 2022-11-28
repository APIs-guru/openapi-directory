from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposCreateDeployKeyPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposCreateDeployKeyRequestBody:
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read_only') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass
class ReposCreateDeployKeyRequest:
    path_params: ReposCreateDeployKeyPathParams = field()
    request: Optional[ReposCreateDeployKeyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateDeployKeyResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    deploy_key: Optional[shared.DeployKey] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
