from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pivotdimensionheader


@dataclass_json
@dataclass
class PivotHeader:
    pivot_dimension_headers: Optional[List[pivotdimensionheader.PivotDimensionHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pivotDimensionHeaders' }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowCount' }})
    
