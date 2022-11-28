from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MaintenanceWindowIdentity:
    r"""MaintenanceWindowIdentity
    Information about the maintenance window.
    """
    
    cutoff: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cutoff') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Duration') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    next_execution_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextExecutionTime') }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    schedule_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduleOffset') }})
    schedule_timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduleTimezone') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    window_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WindowId') }})
    
