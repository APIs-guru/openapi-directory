from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RecoverUserNameRequest:
    request: shared.RecoverUserNameRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RecoverUserNameResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
