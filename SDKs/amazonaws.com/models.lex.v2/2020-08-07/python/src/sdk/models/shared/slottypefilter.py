from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SlotTypeFilter:
    r"""SlotTypeFilter
    Filters the response from the <code>ListSlotTypes</code> operation.
    """
    
    name: SlotTypeFilterNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: SlotTypeFilterOperatorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
