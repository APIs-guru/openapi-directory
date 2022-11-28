from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSigninRequest:
    request: Optional[shared.Signin] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSigninResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    key_failure: Optional[shared.KeyFailure] = field(default=None)
    signin_response: Optional[shared.SigninResponse] = field(default=None)
    
