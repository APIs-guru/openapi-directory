from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LoginRequest:
    request: shared.LoginRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class LoginResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    login_response: Optional[shared.LoginResponse] = field(default=None)
    radius_challenge_response: Optional[shared.RadiusChallengeResponse] = field(default=None)
    status_code: int = field(default=None)
    
