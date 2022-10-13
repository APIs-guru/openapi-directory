from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import executionstate_enum


@dataclass_json
@dataclass
class ExecutionSummary:
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionId' }})
    managed_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedDeviceId' }})
    state: Optional[executionstate_enum.ExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskId' }})
    
