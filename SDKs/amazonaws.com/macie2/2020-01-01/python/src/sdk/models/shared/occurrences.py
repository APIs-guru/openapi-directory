from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cell
from . import range
from . import range
from . import page
from . import record


@dataclass_json
@dataclass
class Occurrences:
    cells: Optional[List[cell.Cell]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cells' }})
    line_ranges: Optional[List[range.Range]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineRanges' }})
    offset_ranges: Optional[List[range.Range]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offsetRanges' }})
    pages: Optional[List[page.Page]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    records: Optional[List[record.Record]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    
