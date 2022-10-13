from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSigninSigninIDPathParams:
    signin_id: int = field(default=None, metadata={'path_param': { 'field_name': 'signinId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSigninSigninIDRequest:
    path_params: PutSigninSigninIDPathParams = field(default=None)
    request: Optional[shared.Signin] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutSigninSigninIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    user_record: Optional[shared.UserRecord] = field(default=None)
    
