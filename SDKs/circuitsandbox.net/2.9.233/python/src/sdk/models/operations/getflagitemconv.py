from dataclasses import dataclass, field



@dataclass
class GetFlagItemConvSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFlagItemConvRequest:
    security: GetFlagItemConvSecurity = field(default=None)
    

@dataclass
class GetFlagItemConvResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
