from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceAuthorizationCodeResponse:
    device_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_code' }})
    dl_masked_email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dl_masked_email' }})
    dl_masked_mobile: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dl_masked_mobile' }})
    expires_in: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_in' }})
    
