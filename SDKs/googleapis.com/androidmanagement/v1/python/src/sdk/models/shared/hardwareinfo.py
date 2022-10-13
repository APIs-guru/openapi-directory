from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HardwareInfo:
    battery_shutdown_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batteryShutdownTemperatures' }})
    battery_throttling_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batteryThrottlingTemperatures' }})
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand' }})
    cpu_shutdown_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuShutdownTemperatures' }})
    cpu_throttling_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuThrottlingTemperatures' }})
    device_baseband_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceBasebandVersion' }})
    enterprise_specific_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enterpriseSpecificId' }})
    gpu_shutdown_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gpuShutdownTemperatures' }})
    gpu_throttling_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gpuThrottlingTemperatures' }})
    hardware: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hardware' }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serialNumber' }})
    skin_shutdown_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skinShutdownTemperatures' }})
    skin_throttling_temperatures: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skinThrottlingTemperatures' }})
    
