from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import inventoryfiltercondition_enum


@dataclass_json
@dataclass
class InventoryFilter:
    condition: inventoryfiltercondition_enum.InventoryFilterConditionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Condition' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
