from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SlotDefaultValue:
    r"""SlotDefaultValue
    A default value for a slot.
    """
    
    default_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    
