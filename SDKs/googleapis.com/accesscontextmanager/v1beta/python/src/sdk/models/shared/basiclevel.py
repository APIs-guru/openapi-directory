from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BasicLevelCombiningFunctionEnum(str, Enum):
    AND = "AND"
    OR = "OR"


@dataclass_json
@dataclass
class BasicLevel:
    r"""BasicLevel
    `BasicLevel` is an `AccessLevel` using a set of recommended features.
    """
    
    combining_function: Optional[BasicLevelCombiningFunctionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combiningFunction') }})
    conditions: Optional[List[Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    
