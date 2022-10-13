from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class PostRequestPasswordResetRequestBodySample:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    

@dataclass
class PostRequestPasswordResetRequest:
    request: PostRequestPasswordResetRequestBodySample = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRequestPasswordResetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    request_password_reset_response: Optional[shared.RequestPasswordResetResponse] = field(default=None)
    
