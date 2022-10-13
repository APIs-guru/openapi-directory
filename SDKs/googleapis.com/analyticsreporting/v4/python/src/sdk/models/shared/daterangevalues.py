from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pivotvalueregion


@dataclass_json
@dataclass
class DateRangeValues:
    pivot_value_regions: Optional[List[pivotvalueregion.PivotValueRegion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pivotValueRegions' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
