from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderBy:
    r"""OrderBy
    Order bys define how rows will be sorted in the response. For example, ordering rows by descending event count is one ordering, and ordering rows by the event name string is a different ordering.
    """
    
    desc: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    dimension: Optional[DimensionOrderBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    metric: Optional[MetricOrderBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    pivot: Optional[PivotOrderBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivot') }})
    
