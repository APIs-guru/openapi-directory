from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SlotPriority:
    r"""SlotPriority
    Sets the priority that Amazon Lex should use when eliciting slot values from a user.
    """
    
    priority: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    slot_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotId') }})
    
