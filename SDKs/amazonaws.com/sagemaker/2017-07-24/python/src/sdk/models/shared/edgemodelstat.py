from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EdgeModelStat:
    active_device_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveDeviceCount' }})
    connected_device_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectedDeviceCount' }})
    model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    model_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelVersion' }})
    offline_device_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OfflineDeviceCount' }})
    sampling_device_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SamplingDeviceCount' }})
    
