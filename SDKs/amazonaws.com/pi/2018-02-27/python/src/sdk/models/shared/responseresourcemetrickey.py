from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResponseResourceMetricKey:
    dimensions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dimensions' }})
    metric: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metric' }})
    
