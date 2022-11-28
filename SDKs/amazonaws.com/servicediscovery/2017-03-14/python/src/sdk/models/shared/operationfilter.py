from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OperationFilter:
    r"""OperationFilter
    A complex type that lets you select the operations that you want to list.
    """
    
    name: OperationFilterNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    condition: Optional[FilterConditionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Condition') }})
    
