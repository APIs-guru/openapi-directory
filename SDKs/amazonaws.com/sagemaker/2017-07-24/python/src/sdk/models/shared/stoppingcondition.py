from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StoppingCondition:
    max_runtime_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxRuntimeInSeconds' }})
    max_wait_time_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxWaitTimeInSeconds' }})
    
