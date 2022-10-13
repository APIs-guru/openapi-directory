from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import joblogevent_enum
from . import joblogeventdata


@dataclass_json
@dataclass
class JobLog:
    event: Optional[joblogevent_enum.JobLogEventEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    event_data: Optional[joblogeventdata.JobLogEventData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventData' }})
    log_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logDateTime' }})
    
