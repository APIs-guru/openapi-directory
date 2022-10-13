from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import slotfiltername_enum
from . import slotfilteroperator_enum


@dataclass_json
@dataclass
class SlotFilter:
    name: slotfiltername_enum.SlotFilterNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operator: slotfilteroperator_enum.SlotFilterOperatorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
