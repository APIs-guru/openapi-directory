from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ResetPasswordPathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetPasswordRequest:
    path_params: ResetPasswordPathParams = field(default=None)
    request: shared.ResetPasswordWithTokenRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ResetPasswordResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    reset_password_400_application_json_one_of: Optional[Any] = field(default=None)
    
