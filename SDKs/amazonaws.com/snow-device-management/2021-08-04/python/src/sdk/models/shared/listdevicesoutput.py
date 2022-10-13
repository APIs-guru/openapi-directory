from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devicesummary


@dataclass_json
@dataclass
class ListDevicesOutput:
    devices: Optional[List[devicesummary.DeviceSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
