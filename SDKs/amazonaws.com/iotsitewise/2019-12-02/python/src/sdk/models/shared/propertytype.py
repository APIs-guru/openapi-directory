from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attribute
from . import measurement
from . import metric
from . import transform


@dataclass_json
@dataclass
class PropertyType:
    attribute: Optional[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute' }})
    measurement: Optional[measurement.Measurement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurement' }})
    metric: Optional[metric.Metric] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    transform: Optional[transform.Transform] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transform' }})
    
