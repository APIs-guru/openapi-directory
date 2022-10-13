from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CancelMaintenanceWindowExecutionRequest:
    window_execution_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowExecutionId' }})
    
