from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import activity
from . import journeylimits
from . import quiettime
from . import journeyschedule
from . import startcondition
from . import state_enum


@dataclass_json
@dataclass
class JourneyResponse:
    activities: Optional[dict[str, activity.Activity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Activities' }})
    application_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationId' }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    last_modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate' }})
    limits: Optional[journeylimits.JourneyLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limits' }})
    local_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalTime' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    quiet_time: Optional[quiettime.QuietTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuietTime' }})
    refresh_frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RefreshFrequency' }})
    refresh_on_segment_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RefreshOnSegmentUpdate' }})
    schedule: Optional[journeyschedule.JourneySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    start_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartActivity' }})
    start_condition: Optional[startcondition.StartCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartCondition' }})
    state: Optional[state_enum.StateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    wait_for_quiet_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WaitForQuietTime' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
