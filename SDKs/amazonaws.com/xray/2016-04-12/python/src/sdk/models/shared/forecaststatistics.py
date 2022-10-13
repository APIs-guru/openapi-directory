from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ForecastStatistics:
    fault_count_high: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaultCountHigh' }})
    fault_count_low: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaultCountLow' }})
    
