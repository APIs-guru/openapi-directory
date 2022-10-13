from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import confirmationstate_enum
from . import slot
from . import intentstate_enum


@dataclass_json
@dataclass
class Intent:
    confirmation_state: Optional[confirmationstate_enum.ConfirmationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirmationState' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    slots: Optional[dict[str, slot.Slot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slots' }})
    state: Optional[intentstate_enum.IntentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
