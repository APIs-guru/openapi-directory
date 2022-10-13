from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TemporaryCredential:
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    valid_for_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidForInMinutes' }})
    
