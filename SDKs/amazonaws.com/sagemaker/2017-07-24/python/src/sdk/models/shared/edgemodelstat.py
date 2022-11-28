from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EdgeModelStat:
    r"""EdgeModelStat
    Status of edge devices with this model.
    """
    
    active_device_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveDeviceCount') }})
    connected_device_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectedDeviceCount') }})
    model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    model_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelVersion') }})
    offline_device_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OfflineDeviceCount') }})
    sampling_device_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SamplingDeviceCount') }})
    
