from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensionmetadata
from . import metricmetadata


@dataclass_json
@dataclass
class Metadata:
    dimensions: Optional[List[dimensionmetadata.DimensionMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    metrics: Optional[List[metricmetadata.MetricMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
