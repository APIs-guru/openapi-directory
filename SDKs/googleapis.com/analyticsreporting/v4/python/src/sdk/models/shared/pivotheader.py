from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pivotheaderentry


@dataclass_json
@dataclass
class PivotHeader:
    pivot_header_entries: Optional[List[pivotheaderentry.PivotHeaderEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pivotHeaderEntries' }})
    total_pivot_groups_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPivotGroupsCount' }})
    
