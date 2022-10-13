from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class SetEurekaInfoRequest:
    request: shared.SetEurekaInfoRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetEurekaInfoResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
