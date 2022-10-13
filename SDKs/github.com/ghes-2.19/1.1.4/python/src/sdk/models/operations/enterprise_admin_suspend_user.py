from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class EnterpriseAdminSuspendUserPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSuspendUserRequestBody:
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    

@dataclass
class EnterpriseAdminSuspendUserRequest:
    path_params: EnterpriseAdminSuspendUserPathParams = field(default=None)
    request: Optional[EnterpriseAdminSuspendUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminSuspendUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
