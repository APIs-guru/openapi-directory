from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppDeviceIDRequest:
    request: shared.AppDeviceIDRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AppDeviceIDResponse:
    content_type: str = field(default=None)
    example11: Optional[shared.Example11] = field(default=None)
    status_code: int = field(default=None)
    
