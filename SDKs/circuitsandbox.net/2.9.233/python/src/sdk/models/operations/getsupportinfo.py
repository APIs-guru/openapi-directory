from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSupportInfoSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSupportInfoRequest:
    security: GetSupportInfoSecurity = field()
    

@dataclass
class GetSupportInfoResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
