from dataclasses import dataclass, field



@dataclass
class Destiny2AwaInitializeRequestSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Destiny2AwaInitializeRequestRequest:
    security: Destiny2AwaInitializeRequestSecurity = field(default=None)
    

@dataclass
class Destiny2AwaInitializeRequestResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
