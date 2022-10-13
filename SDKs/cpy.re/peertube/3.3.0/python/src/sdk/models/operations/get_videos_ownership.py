from dataclasses import dataclass, field



@dataclass
class GetVideosOwnershipSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetVideosOwnershipRequest:
    security: GetVideosOwnershipSecurity = field(default=None)
    

@dataclass
class GetVideosOwnershipResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
