from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class NightModesettingsRequest:
    request: shared.NightModesettingsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NightModesettingsResponse:
    content_type: str = field(default=None)
    example17: Optional[shared.Example17] = field(default=None)
    status_code: int = field(default=None)
    
