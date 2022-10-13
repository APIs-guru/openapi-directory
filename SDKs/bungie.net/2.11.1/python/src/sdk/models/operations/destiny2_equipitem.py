from dataclasses import dataclass, field



@dataclass
class Destiny2EquipItemSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Destiny2EquipItemRequest:
    security: Destiny2EquipItemSecurity = field(default=None)
    

@dataclass
class Destiny2EquipItemResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
