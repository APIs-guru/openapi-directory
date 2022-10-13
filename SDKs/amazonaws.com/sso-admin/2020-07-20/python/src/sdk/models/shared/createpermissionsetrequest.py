from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreatePermissionSetRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceArn' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    relay_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelayState' }})
    session_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionDuration' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
