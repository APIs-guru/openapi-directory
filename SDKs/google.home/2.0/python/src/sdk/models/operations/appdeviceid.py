from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppDeviceIDRequest:
    request: shared.AppDeviceIDRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AppDeviceIDResponse:
    content_type: str = field()
    status_code: int = field()
    example11: Optional[shared.Example11] = field(default=None)
    
