from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SlotDefaultValueSpec:
    r"""SlotDefaultValueSpec
    Contains the default values for a slot. Default values are used when Amazon Lex hasn't determined a value for a slot.
    """
    
    default_value_list: List[SlotDefaultValue] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValueList') }})
    
