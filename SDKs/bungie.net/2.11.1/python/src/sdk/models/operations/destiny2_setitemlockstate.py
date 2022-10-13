from dataclasses import dataclass, field



@dataclass
class Destiny2SetItemLockStateSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Destiny2SetItemLockStateRequest:
    security: Destiny2SetItemLockStateSecurity = field(default=None)
    

@dataclass
class Destiny2SetItemLockStateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
