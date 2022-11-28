from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Intent:
    r"""Intent
    The current intent that Amazon Lex V2 is attempting to fulfill.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    confirmation_state: Optional[ConfirmationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmationState') }})
    slots: Optional[dict[str, Slot]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slots') }})
    state: Optional[IntentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
