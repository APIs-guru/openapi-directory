from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProfileSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProfileRequest:
    security: GetProfileSecurity = field()
    

@dataclass
class GetProfileResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
