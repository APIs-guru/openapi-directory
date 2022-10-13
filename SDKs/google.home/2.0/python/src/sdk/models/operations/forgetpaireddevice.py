from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class ForgetpaireddeviceRequest:
    request: shared.ForgetpaireddeviceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ForgetpaireddeviceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
