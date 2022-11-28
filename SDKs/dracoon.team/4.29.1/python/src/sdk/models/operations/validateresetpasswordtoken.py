from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ValidateResetPasswordTokenPathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class ValidateResetPasswordTokenRequest:
    path_params: ValidateResetPasswordTokenPathParams = field()
    

@dataclass
class ValidateResetPasswordTokenResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    reset_password_token_validate_response: Optional[shared.ResetPasswordTokenValidateResponse] = field(default=None)
    
