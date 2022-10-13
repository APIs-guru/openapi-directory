from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import confirmationstatus_enum
from . import dialogactiontype_enum
from . import fulfillmentstate_enum


@dataclass_json
@dataclass
class IntentSummary:
    checkpoint_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkpointLabel' }})
    confirmation_status: Optional[confirmationstatus_enum.ConfirmationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirmationStatus' }})
    dialog_action_type: dialogactiontype_enum.DialogActionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogActionType' }})
    fulfillment_state: Optional[fulfillmentstate_enum.FulfillmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentState' }})
    intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentName' }})
    slot_to_elicit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotToElicit' }})
    slots: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slots' }})
    
