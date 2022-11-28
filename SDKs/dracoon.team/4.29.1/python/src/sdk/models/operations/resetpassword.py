from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ResetPasswordPathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetPasswordRequest:
    path_params: ResetPasswordPathParams = field()
    request: shared.ResetPasswordWithTokenRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ResetPasswordResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    reset_password_400_application_json_one_of: Optional[Any] = field(default=None)
    
