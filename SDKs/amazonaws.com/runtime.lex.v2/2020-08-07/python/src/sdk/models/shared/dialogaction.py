from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dialogactiontype_enum


@dataclass_json
@dataclass
class DialogAction:
    slot_to_elicit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotToElicit' }})
    type: dialogactiontype_enum.DialogActionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
