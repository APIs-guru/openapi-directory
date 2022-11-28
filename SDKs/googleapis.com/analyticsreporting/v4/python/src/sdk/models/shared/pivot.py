from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Pivot:
    r"""Pivot
    The Pivot describes the pivot section in the request. The Pivot helps rearrange the information in the table for certain reports by pivoting your data on a second dimension.
    """
    
    dimension_filter_clauses: Optional[List[DimensionFilterClause]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilterClauses') }})
    dimensions: Optional[List[Dimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    max_group_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxGroupCount') }})
    metrics: Optional[List[Metric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    start_group: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startGroup') }})
    
