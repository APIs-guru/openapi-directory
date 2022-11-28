from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class Destiny2AwaInitializeRequestSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Destiny2AwaInitializeRequestRequest:
    security: Destiny2AwaInitializeRequestSecurity = field()
    

@dataclass
class Destiny2AwaInitializeRequestResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
