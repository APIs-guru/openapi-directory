from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetVideosOwnershipSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetVideosOwnershipRequest:
    security: GetVideosOwnershipSecurity = field()
    

@dataclass
class GetVideosOwnershipResponse:
    content_type: str = field()
    status_code: int = field()
    
