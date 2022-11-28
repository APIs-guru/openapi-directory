from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSigninSigninIDPathParams:
    signin_id: int = field(metadata={'path_param': { 'field_name': 'signinId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSigninSigninIDRequest:
    path_params: DeleteSigninSigninIDPathParams = field()
    

@dataclass
class DeleteSigninSigninIDResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    
