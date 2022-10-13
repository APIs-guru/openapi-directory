from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import campaigneventfilter
from . import frequency_enum
from . import quiettime


@dataclass_json
@dataclass
class Schedule:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime' }})
    event_filter: Optional[campaigneventfilter.CampaignEventFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventFilter' }})
    frequency: Optional[frequency_enum.FrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Frequency' }})
    is_local_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsLocalTime' }})
    quiet_time: Optional[quiettime.QuietTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuietTime' }})
    start_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timezone' }})
    
