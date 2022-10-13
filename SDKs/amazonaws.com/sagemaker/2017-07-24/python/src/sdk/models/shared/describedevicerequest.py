from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeDeviceRequest:
    device_fleet_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceFleetName' }})
    device_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceName' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
