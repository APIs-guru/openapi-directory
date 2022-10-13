from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import stackinstancestatus_enum


@dataclass_json
@dataclass
class StackInstance:
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Account' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region' }})
    stack_instance_status: Optional[stackinstancestatus_enum.StackInstanceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackInstanceStatus' }})
    
