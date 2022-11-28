from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LoginRequest:
    request: shared.LoginRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class LoginResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    login_response: Optional[shared.LoginResponse] = field(default=None)
    radius_challenge_response: Optional[shared.RadiusChallengeResponse] = field(default=None)
    
