from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metricheaderentry


@dataclass_json
@dataclass
class PivotHeaderEntry:
    dimension_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionNames' }})
    dimension_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionValues' }})
    metric: Optional[metricheaderentry.MetricHeaderEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    
