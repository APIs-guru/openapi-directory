from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdatePermissionSetRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceArn' }})
    permission_set_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionSetArn' }})
    relay_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelayState' }})
    session_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionDuration' }})
    
