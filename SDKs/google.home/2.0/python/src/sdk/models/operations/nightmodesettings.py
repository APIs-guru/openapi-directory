from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class NightModesettingsRequest:
    request: shared.NightModesettingsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NightModesettingsResponse:
    content_type: str = field()
    status_code: int = field()
    example17: Optional[shared.Example17] = field(default=None)
    
