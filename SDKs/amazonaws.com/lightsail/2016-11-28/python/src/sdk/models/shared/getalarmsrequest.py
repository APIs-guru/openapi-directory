from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetAlarmsRequest:
    alarm_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmName' }})
    monitored_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoredResourceName' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    
