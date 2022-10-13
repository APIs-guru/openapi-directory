from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import actionstatus_enum


@dataclass_json
@dataclass
class UpdateActionRequest:
    action_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Properties' }})
    properties_to_remove: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PropertiesToRemove' }})
    status: Optional[actionstatus_enum.ActionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
