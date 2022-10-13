from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProcessingStoppingCondition:
    max_runtime_in_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxRuntimeInSeconds' }})
    
