from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HardwareStatus:
    r"""HardwareStatus
    Hardware status. Temperatures may be compared to the temperature thresholds available in hardwareInfo to determine hardware health.
    """
    
    battery_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batteryTemperatures') }})
    cpu_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuTemperatures') }})
    cpu_usages: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuUsages') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    fan_speeds: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fanSpeeds') }})
    gpu_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gpuTemperatures') }})
    skin_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skinTemperatures') }})
    
