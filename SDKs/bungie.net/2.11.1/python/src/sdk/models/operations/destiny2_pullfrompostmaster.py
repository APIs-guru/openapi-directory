from dataclasses import dataclass, field



@dataclass
class Destiny2PullFromPostmasterSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Destiny2PullFromPostmasterRequest:
    security: Destiny2PullFromPostmasterSecurity = field(default=None)
    

@dataclass
class Destiny2PullFromPostmasterResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
