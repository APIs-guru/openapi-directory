from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckReadyStatusRequest:
    request: shared.CheckReadyStatusRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CheckReadyStatusResponse:
    content_type: str = field()
    status_code: int = field()
    example13: Optional[shared.Example13] = field(default=None)
    
