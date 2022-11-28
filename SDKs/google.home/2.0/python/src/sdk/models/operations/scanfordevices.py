from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ScanfordevicesRequest:
    request: shared.ScanfordevicesRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ScanfordevicesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
