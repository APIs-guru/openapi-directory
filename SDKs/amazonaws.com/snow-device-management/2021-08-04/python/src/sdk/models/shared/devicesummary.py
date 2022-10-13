from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceSummary:
    associated_with_job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associatedWithJob' }})
    managed_device_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedDeviceArn' }})
    managed_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedDeviceId' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
