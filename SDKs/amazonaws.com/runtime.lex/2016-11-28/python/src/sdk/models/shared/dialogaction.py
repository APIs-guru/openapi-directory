from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import fulfillmentstate_enum
from . import messageformattype_enum
from . import dialogactiontype_enum


@dataclass_json
@dataclass
class DialogAction:
    fulfillment_state: Optional[fulfillmentstate_enum.FulfillmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentState' }})
    intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentName' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    message_format: Optional[messageformattype_enum.MessageFormatTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageFormat' }})
    slot_to_elicit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotToElicit' }})
    slots: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slots' }})
    type: dialogactiontype_enum.DialogActionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
