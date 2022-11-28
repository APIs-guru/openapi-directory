from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FilterExpression:
    r"""FilterExpression
    To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics.
    """
    
    and_group: Optional[FilterExpressionList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('andGroup') }})
    filter: Optional[Filter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    not_expression: Optional[FilterExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notExpression') }})
    or_group: Optional[FilterExpressionList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orGroup') }})
    
