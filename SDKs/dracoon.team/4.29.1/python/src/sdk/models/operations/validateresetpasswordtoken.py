from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ValidateResetPasswordTokenPathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class ValidateResetPasswordTokenRequest:
    path_params: ValidateResetPasswordTokenPathParams = field(default=None)
    

@dataclass
class ValidateResetPasswordTokenResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    reset_password_token_validate_response: Optional[shared.ResetPasswordTokenValidateResponse] = field(default=None)
    status_code: int = field(default=None)
    
