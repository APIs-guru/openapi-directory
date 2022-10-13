from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckReadyStatusRequest:
    request: shared.CheckReadyStatusRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CheckReadyStatusResponse:
    content_type: str = field(default=None)
    example13: Optional[shared.Example13] = field(default=None)
    status_code: int = field(default=None)
    
