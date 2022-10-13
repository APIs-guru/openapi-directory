from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeregisterTaskFromMaintenanceWindowResult:
    window_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowId' }})
    window_task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowTaskId' }})
    
