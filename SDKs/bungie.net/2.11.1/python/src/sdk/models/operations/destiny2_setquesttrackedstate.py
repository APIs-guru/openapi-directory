from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class Destiny2SetQuestTrackedStateSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Destiny2SetQuestTrackedStateRequest:
    security: Destiny2SetQuestTrackedStateSecurity = field()
    

@dataclass
class Destiny2SetQuestTrackedStateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
