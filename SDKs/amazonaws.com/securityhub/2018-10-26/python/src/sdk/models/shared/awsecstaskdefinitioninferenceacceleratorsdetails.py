from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionInferenceAcceleratorsDetails:
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceName' }})
    device_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceType' }})
    
