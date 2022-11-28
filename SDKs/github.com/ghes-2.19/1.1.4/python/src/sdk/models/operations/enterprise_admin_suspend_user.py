from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class EnterpriseAdminSuspendUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSuspendUserRequestBody:
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass
class EnterpriseAdminSuspendUserRequest:
    path_params: EnterpriseAdminSuspendUserPathParams = field()
    request: Optional[EnterpriseAdminSuspendUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminSuspendUserResponse:
    content_type: str = field()
    status_code: int = field()
    
