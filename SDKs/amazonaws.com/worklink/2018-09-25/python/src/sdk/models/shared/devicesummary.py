from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import devicestatus_enum


@dataclass_json
@dataclass
class DeviceSummary:
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceId' }})
    device_status: Optional[devicestatus_enum.DeviceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceStatus' }})
    
