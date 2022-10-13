from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Device:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    device_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceName' }})
    iot_thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IotThingName' }})
    
