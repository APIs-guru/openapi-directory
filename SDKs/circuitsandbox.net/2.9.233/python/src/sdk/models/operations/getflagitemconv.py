from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFlagItemConvSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFlagItemConvRequest:
    security: GetFlagItemConvSecurity = field()
    

@dataclass
class GetFlagItemConvResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
