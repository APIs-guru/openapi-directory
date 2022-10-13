from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateMaintenanceWindowRequest:
    allow_unassociated_targets: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowUnassociatedTargets' }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    cutoff: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cutoff' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    duration: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Duration' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDate' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    schedule: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    schedule_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduleOffset' }})
    schedule_timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduleTimezone' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
