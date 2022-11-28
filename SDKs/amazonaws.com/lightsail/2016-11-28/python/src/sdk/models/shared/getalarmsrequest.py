from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetAlarmsRequest:
    alarm_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmName') }})
    monitored_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoredResourceName') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    
