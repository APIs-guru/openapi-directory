from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RecoverUserNameRequest:
    request: shared.RecoverUserNameRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RecoverUserNameResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
