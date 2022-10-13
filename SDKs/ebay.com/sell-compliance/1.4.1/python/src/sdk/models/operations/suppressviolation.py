from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class SuppressViolationSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SuppressViolationRequest:
    request: shared.SuppressViolationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SuppressViolationSecurity = field(default=None)
    

@dataclass
class SuppressViolationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
