from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MapFilter:
    r"""MapFilter
    A map filter for querying findings. Each map filter provides the field to check, the value to look for, and the comparison operator.
    """
    
    comparison: Optional[MapFilterComparisonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Comparison') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
