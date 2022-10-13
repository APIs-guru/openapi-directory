from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSigninSigninIDPathParams:
    signin_id: int = field(default=None, metadata={'path_param': { 'field_name': 'signinId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSigninSigninIDRequest:
    path_params: DeleteSigninSigninIDPathParams = field(default=None)
    

@dataclass
class DeleteSigninSigninIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    
