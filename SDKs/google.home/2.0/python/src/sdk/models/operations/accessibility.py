from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccessibilityRequest:
    request: shared.AccessibilityRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AccessibilityResponse:
    content_type: str = field()
    status_code: int = field()
    getcurrentvalues: Optional[shared.Getcurrentvalues] = field(default=None)
    
