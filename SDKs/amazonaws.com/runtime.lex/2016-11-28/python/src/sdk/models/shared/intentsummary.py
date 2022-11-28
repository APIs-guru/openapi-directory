from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IntentSummary:
    r"""IntentSummary
    Provides information about the state of an intent. You can use this information to get the current state of an intent so that you can process the intent, or so that you can return the intent to its previous state.
    """
    
    dialog_action_type: DialogActionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogActionType') }})
    checkpoint_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkpointLabel') }})
    confirmation_status: Optional[ConfirmationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmationStatus') }})
    fulfillment_state: Optional[FulfillmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentState') }})
    intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentName') }})
    slot_to_elicit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotToElicit') }})
    slots: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slots') }})
    
