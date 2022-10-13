from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class VerifyUserPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class VerifyUserRequestBody:
    is_pending_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPendingEmail' }})
    verification_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationString' }})
    

@dataclass
class VerifyUserRequest:
    path_params: VerifyUserPathParams = field(default=None)
    request: Optional[VerifyUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VerifyUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
