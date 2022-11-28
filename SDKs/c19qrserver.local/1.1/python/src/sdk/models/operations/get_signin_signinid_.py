from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSigninSigninIDPathParams:
    signin_id: int = field(metadata={'path_param': { 'field_name': 'signinId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSigninSigninIDRequest:
    path_params: GetSigninSigninIDPathParams = field()
    

@dataclass
class GetSigninSigninIDResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    signin: Optional[shared.Signin] = field(default=None)
    
