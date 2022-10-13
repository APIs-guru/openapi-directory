from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pivotselection


@dataclass_json
@dataclass
class PivotOrderBy:
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricName' }})
    pivot_selections: Optional[List[pivotselection.PivotSelection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pivotSelections' }})
    
