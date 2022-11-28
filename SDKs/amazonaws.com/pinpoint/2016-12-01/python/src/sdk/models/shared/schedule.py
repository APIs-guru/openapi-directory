from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Schedule:
    r"""Schedule
    Specifies the schedule settings for a campaign.
    """
    
    start_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime') }})
    event_filter: Optional[CampaignEventFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventFilter') }})
    frequency: Optional[FrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Frequency') }})
    is_local_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsLocalTime') }})
    quiet_time: Optional[QuietTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuietTime') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timezone') }})
    
