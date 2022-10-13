from dataclasses import dataclass, field



@dataclass
class Destiny2InsertSocketPlugSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Destiny2InsertSocketPlugRequest:
    security: Destiny2InsertSocketPlugSecurity = field(default=None)
    

@dataclass
class Destiny2InsertSocketPlugResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
