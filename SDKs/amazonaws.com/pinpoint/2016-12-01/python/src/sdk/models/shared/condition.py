from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Condition:
    r"""Condition
    Specifies the conditions to evaluate for an activity in a journey, and how to evaluate those conditions.
    """
    
    conditions: Optional[List[SimpleCondition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Conditions') }})
    operator: Optional[OperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operator') }})
    
