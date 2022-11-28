from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PivotHeader:
    r"""PivotHeader
    Dimensions' values in a single pivot.
    """
    
    pivot_dimension_headers: Optional[List[PivotDimensionHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivotDimensionHeaders') }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowCount') }})
    
