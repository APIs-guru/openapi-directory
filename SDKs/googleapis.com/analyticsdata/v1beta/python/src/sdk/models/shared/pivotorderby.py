from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PivotOrderBy:
    r"""PivotOrderBy
    Sorts by a pivot column group.
    """
    
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    pivot_selections: Optional[List[PivotSelection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivotSelections') }})
    
