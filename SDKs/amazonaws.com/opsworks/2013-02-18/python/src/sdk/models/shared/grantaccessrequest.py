from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GrantAccessRequest:
    instance_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    valid_for_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidForInMinutes' }})
    
