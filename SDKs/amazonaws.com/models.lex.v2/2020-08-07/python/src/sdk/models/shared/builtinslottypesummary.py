from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BuiltInSlotTypeSummary:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    slot_type_signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotTypeSignature' }})
    
