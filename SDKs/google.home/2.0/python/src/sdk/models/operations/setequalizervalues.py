from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SetEqualizerValuesRequest:
    request: shared.SetEqualizerValuesRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetEqualizerValuesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
