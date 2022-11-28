from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Filter:
    r"""Filter
    The constraints that you want all returned products to match.
    """
    
    field: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Field') }})
    type: FilterTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
