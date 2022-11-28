from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FilterCondition:
    r"""FilterCondition
    This structure describes the filtering of columns in a table based on a filter condition.
    """
    
    comparison_operator: Optional[ComparisonOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComparisonOperator') }})
    field: Optional[FieldNameStringEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Field') }})
    string_value_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StringValueList') }})
    
