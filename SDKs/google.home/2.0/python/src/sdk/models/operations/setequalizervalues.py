from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class SetEqualizerValuesRequest:
    request: shared.SetEqualizerValuesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetEqualizerValuesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
