from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import snowconedeviceconfiguration


@dataclass_json
@dataclass
class DeviceConfiguration:
    snowcone_device_configuration: Optional[snowconedeviceconfiguration.SnowconeDeviceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnowconeDeviceConfiguration' }})
    
