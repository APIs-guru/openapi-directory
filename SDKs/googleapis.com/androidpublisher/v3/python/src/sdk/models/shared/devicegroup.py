from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deviceselector


@dataclass_json
@dataclass
class DeviceGroup:
    device_selectors: Optional[List[deviceselector.DeviceSelector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceSelectors' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
