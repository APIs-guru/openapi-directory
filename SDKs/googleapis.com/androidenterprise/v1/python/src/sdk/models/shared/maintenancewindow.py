from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MaintenanceWindow:
    duration_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationMs' }})
    start_time_after_midnight_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimeAfterMidnightMs' }})
    
