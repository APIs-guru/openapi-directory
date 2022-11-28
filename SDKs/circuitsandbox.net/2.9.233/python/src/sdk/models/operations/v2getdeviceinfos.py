from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class V2GetDeviceInfosSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class V2GetDeviceInfosRequest:
    security: V2GetDeviceInfosSecurity = field()
    

@dataclass
class V2GetDeviceInfosResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
