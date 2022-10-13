from dataclasses import dataclass, field



@dataclass
class Destiny2TransferItemSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Destiny2TransferItemRequest:
    security: Destiny2TransferItemSecurity = field(default=None)
    

@dataclass
class Destiny2TransferItemResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
