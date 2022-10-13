from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1WorkloadKmsSettings:
    next_rotation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextRotationTime' }})
    rotation_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rotationPeriod' }})
    
