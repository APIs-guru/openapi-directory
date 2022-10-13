from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alarm


@dataclass_json
@dataclass
class GetAlarmsResult:
    alarms: Optional[List[alarm.Alarm]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarms' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
