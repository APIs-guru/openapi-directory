from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccessibilityRequest:
    request: shared.AccessibilityRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AccessibilityResponse:
    content_type: str = field(default=None)
    getcurrentvalues: Optional[shared.Getcurrentvalues] = field(default=None)
    status_code: int = field(default=None)
    
