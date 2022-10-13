from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeregisterTargetFromMaintenanceWindowRequest:
    safe: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Safe' }})
    window_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowId' }})
    window_target_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowTargetId' }})
    
