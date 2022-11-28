from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BetweenFilter:
    r"""BetweenFilter
    To express that the result needs to be between two numbers (inclusive).
    """
    
    from_value: Optional[NumericValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromValue') }})
    to_value: Optional[NumericValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toValue') }})
    
