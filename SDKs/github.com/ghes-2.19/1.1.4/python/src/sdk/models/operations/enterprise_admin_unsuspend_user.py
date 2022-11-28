from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class EnterpriseAdminUnsuspendUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUnsuspendUserRequestBody:
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass
class EnterpriseAdminUnsuspendUserRequest:
    path_params: EnterpriseAdminUnsuspendUserPathParams = field()
    request: Optional[EnterpriseAdminUnsuspendUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUnsuspendUserResponse:
    content_type: str = field()
    status_code: int = field()
    
