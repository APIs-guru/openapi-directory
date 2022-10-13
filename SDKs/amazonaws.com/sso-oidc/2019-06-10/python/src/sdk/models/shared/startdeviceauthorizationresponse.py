from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartDeviceAuthorizationResponse:
    device_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceCode' }})
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresIn' }})
    interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    user_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userCode' }})
    verification_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationUri' }})
    verification_uri_complete: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationUriComplete' }})
    
