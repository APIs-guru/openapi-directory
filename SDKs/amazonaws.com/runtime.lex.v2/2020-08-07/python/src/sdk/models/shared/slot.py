from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import value
from . import slot


@dataclass_json
@dataclass
class Slot:
    value: Optional[value.Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    values: Optional[List[slot.Slot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
