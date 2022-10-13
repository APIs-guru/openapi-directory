from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CampaignLimits:
    daily: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Daily' }})
    maximum_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumDuration' }})
    messages_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessagesPerSecond' }})
    session: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Session' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Total' }})
    
