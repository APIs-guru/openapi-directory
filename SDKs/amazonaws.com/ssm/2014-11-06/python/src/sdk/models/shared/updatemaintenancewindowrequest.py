from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateMaintenanceWindowRequest:
    allow_unassociated_targets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowUnassociatedTargets' }})
    cutoff: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cutoff' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Duration' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDate' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    replace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Replace' }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    schedule_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduleOffset' }})
    schedule_timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduleTimezone' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate' }})
    window_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowId' }})
    
