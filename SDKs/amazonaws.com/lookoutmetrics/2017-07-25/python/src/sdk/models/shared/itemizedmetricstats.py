from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItemizedMetricStats:
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    occurrence_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OccurrenceCount' }})
    
