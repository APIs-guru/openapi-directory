from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attributedimension
from . import setdimension
from . import metricdimension


@dataclass_json
@dataclass
class EventDimensions:
    attributes: Optional[dict[str, attributedimension.AttributeDimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    event_type: Optional[setdimension.SetDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventType' }})
    metrics: Optional[dict[str, metricdimension.MetricDimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metrics' }})
    
