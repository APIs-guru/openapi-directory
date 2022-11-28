from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ForgetpaireddeviceRequest:
    request: shared.ForgetpaireddeviceRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ForgetpaireddeviceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
