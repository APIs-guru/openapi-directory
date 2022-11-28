from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InventoryFilter:
    r"""InventoryFilter
    An inventory filter.
    """
    
    condition: InventoryFilterConditionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Condition') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
