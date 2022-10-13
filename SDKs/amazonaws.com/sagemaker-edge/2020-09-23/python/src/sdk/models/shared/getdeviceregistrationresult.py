from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetDeviceRegistrationResult:
    cache_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CacheTTL' }})
    device_registration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceRegistration' }})
    
