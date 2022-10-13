from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSigninSigninIDPathParams:
    signin_id: int = field(default=None, metadata={'path_param': { 'field_name': 'signinId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSigninSigninIDRequest:
    path_params: GetSigninSigninIDPathParams = field(default=None)
    

@dataclass
class GetSigninSigninIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    signin: Optional[shared.Signin] = field(default=None)
    
