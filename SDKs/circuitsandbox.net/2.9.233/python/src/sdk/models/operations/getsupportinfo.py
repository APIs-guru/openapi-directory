from dataclasses import dataclass, field



@dataclass
class GetSupportInfoSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSupportInfoRequest:
    security: GetSupportInfoSecurity = field(default=None)
    

@dataclass
class GetSupportInfoResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
