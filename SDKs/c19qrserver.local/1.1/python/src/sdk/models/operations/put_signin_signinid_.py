from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSigninSigninIDPathParams:
    signin_id: int = field(metadata={'path_param': { 'field_name': 'signinId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSigninSigninIDRequest:
    path_params: PutSigninSigninIDPathParams = field()
    request: Optional[shared.Signin] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutSigninSigninIDResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    user_record: Optional[shared.UserRecord] = field(default=None)
    
