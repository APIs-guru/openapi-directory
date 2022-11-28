from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SlotFilter:
    r"""SlotFilter
    Filters the response from the <code>ListSlots</code> operation.
    """
    
    name: SlotFilterNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: SlotFilterOperatorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
