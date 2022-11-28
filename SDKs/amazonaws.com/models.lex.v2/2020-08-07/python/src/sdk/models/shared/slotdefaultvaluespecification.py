from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SlotDefaultValueSpecification:
    r"""SlotDefaultValueSpecification
    Defines a list of values that Amazon Lex should use as the default value for a slot.
    """
    
    default_value_list: List[SlotDefaultValue] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValueList') }})
    
