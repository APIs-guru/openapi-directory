from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceSummary:
    r"""DeviceSummary
    Identifying information about the device.
    """
    
    associated_with_job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedWithJob') }})
    managed_device_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedDeviceArn') }})
    managed_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedDeviceId') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
