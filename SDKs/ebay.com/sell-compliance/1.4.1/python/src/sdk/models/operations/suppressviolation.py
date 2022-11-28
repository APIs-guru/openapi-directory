from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class SuppressViolationSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SuppressViolationRequest:
    request: shared.SuppressViolationRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: SuppressViolationSecurity = field()
    

@dataclass
class SuppressViolationResponse:
    content_type: str = field()
    status_code: int = field()
    
