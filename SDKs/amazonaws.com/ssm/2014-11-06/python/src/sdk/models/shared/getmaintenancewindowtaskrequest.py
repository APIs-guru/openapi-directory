from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetMaintenanceWindowTaskRequest:
    window_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowId' }})
    window_task_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowTaskId' }})
    
