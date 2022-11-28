from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAccountRequest:
    request: Optional[shared.CreateAccount] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAccountResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    
