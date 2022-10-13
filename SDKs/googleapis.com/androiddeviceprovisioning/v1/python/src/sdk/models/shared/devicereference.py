from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deviceidentifier


@dataclass_json
@dataclass
class DeviceReference:
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    device_identifier: Optional[deviceidentifier.DeviceIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceIdentifier' }})
    
