from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SendQuota:
    max24_hour_send: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Max24HourSend' }})
    max_send_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxSendRate' }})
    sent_last24_hours: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SentLast24Hours' }})
    
