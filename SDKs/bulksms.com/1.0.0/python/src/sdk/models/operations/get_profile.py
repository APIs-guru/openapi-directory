from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProfileSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetProfileRequest:
    security: GetProfileSecurity = field()
    

@dataclass
class GetProfileResponse:
    content_type: str = field()
    status_code: int = field()
    profile: Optional[shared.Profile] = field(default=None)
    
