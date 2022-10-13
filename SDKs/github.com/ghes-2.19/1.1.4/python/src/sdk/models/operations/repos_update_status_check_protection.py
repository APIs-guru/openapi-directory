from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposUpdateStatusCheckProtectionPathParams:
    branch: str = field(default=None, metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposUpdateStatusCheckProtectionRequestBody:
    contexts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contexts' }})
    strict: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strict' }})
    

@dataclass
class ReposUpdateStatusCheckProtectionRequest:
    path_params: ReposUpdateStatusCheckProtectionPathParams = field(default=None)
    request: Optional[ReposUpdateStatusCheckProtectionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposUpdateStatusCheckProtectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    status_check_policy: Optional[shared.StatusCheckPolicy] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
