from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HardwareInfo:
    r"""HardwareInfo
    Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy.
    """
    
    battery_shutdown_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batteryShutdownTemperatures') }})
    battery_throttling_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batteryThrottlingTemperatures') }})
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    cpu_shutdown_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuShutdownTemperatures') }})
    cpu_throttling_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuThrottlingTemperatures') }})
    device_baseband_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceBasebandVersion') }})
    enterprise_specific_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enterpriseSpecificId') }})
    gpu_shutdown_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gpuShutdownTemperatures') }})
    gpu_throttling_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gpuThrottlingTemperatures') }})
    hardware: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hardware') }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    skin_shutdown_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skinShutdownTemperatures') }})
    skin_throttling_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skinThrottlingTemperatures') }})
    
