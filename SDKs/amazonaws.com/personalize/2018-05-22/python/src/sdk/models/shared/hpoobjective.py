from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HpoObjective:
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricName' }})
    metric_regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricRegex' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
