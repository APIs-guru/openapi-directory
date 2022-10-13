from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAccountRequest:
    request: Optional[shared.CreateAccount] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAccountResponse:
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
