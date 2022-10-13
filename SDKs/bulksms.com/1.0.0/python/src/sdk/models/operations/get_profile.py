from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProfileSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetProfileRequest:
    security: GetProfileSecurity = field(default=None)
    

@dataclass
class GetProfileResponse:
    content_type: str = field(default=None)
    profile: Optional[shared.Profile] = field(default=None)
    status_code: int = field(default=None)
    
