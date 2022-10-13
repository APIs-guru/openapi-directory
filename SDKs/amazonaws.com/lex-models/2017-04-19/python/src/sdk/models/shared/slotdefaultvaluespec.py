from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import slotdefaultvalue


@dataclass_json
@dataclass
class SlotDefaultValueSpec:
    default_value_list: List[slotdefaultvalue.SlotDefaultValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValueList' }})
    
