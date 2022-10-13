from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import campaigneventfilter
from . import quiettime


@dataclass_json
@dataclass
class InAppCampaignSchedule:
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDate' }})
    event_filter: Optional[campaigneventfilter.CampaignEventFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventFilter' }})
    quiet_time: Optional[quiettime.QuietTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuietTime' }})
    
