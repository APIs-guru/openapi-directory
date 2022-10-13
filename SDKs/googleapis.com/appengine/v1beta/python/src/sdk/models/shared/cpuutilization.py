from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CPUUtilization:
    aggregation_window_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregationWindowLength' }})
    target_utilization: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetUtilization' }})
    
