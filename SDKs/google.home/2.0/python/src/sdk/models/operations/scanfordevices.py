from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class ScanfordevicesRequest:
    request: shared.ScanfordevicesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ScanfordevicesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
