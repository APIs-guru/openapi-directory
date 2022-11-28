from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PivotHeader:
    r"""PivotHeader
    The headers for each of the pivot sections defined in the request.
    """
    
    pivot_header_entries: Optional[List[PivotHeaderEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivotHeaderEntries') }})
    total_pivot_groups_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPivotGroupsCount') }})
    
