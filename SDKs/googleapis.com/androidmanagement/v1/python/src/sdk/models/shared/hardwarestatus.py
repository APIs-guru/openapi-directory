from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HardwareStatus:
    battery_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batteryTemperatures' }})
    cpu_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuTemperatures' }})
    cpu_usages: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuUsages' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    fan_speeds: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fanSpeeds' }})
    gpu_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gpuTemperatures' }})
    skin_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skinTemperatures' }})
    
