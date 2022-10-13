from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SlotPriority:
    priority: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    slot_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotId' }})
    
