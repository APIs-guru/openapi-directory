from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metricheader


@dataclass_json
@dataclass
class ColumnHeader:
    dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    metric_header: Optional[metricheader.MetricHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricHeader' }})
    
