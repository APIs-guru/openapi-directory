from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeregisterTargetFromMaintenanceWindowRequest:
    window_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WindowId') }})
    window_target_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WindowTargetId') }})
    safe: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Safe') }})
    
