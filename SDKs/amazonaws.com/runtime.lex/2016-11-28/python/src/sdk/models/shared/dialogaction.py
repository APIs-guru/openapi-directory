from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DialogAction:
    r"""DialogAction
    Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.
    """
    
    type: DialogActionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    fulfillment_state: Optional[FulfillmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentState') }})
    intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentName') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    message_format: Optional[MessageFormatTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageFormat') }})
    slot_to_elicit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotToElicit') }})
    slots: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slots') }})
    
