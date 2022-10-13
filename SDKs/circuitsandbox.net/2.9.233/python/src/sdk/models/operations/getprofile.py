from dataclasses import dataclass, field



@dataclass
class GetProfileSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProfileRequest:
    security: GetProfileSecurity = field(default=None)
    

@dataclass
class GetProfileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
