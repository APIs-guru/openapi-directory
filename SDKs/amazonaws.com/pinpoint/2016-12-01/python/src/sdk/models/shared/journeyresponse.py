from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JourneyResponse:
    r"""JourneyResponse
    Provides information about the status, configuration, and other settings for a journey.
    """
    
    application_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    activities: Optional[dict[str, Activity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Activities') }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate') }})
    last_modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate') }})
    limits: Optional[JourneyLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limits') }})
    local_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalTime') }})
    quiet_time: Optional[QuietTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuietTime') }})
    refresh_frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefreshFrequency') }})
    refresh_on_segment_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefreshOnSegmentUpdate') }})
    schedule: Optional[JourneySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    start_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartActivity') }})
    start_condition: Optional[StartCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartCondition') }})
    state: Optional[StateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    wait_for_quiet_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WaitForQuietTime') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
