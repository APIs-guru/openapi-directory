from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateMaintenanceWindowRequest:
    allow_unassociated_targets: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowUnassociatedTargets') }})
    cutoff: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cutoff') }})
    duration: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Duration') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    schedule: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate') }})
    schedule_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduleOffset') }})
    schedule_timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduleTimezone') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
