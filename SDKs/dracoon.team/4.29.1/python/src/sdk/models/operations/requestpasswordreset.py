from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestPasswordResetRequest:
    request: shared.ResetPasswordRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RequestPasswordResetResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
