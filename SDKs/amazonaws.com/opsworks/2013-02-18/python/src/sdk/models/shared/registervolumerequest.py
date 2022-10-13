from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegisterVolumeRequest:
    ec2_volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ec2VolumeId' }})
    stack_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackId' }})
    
