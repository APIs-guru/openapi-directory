from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JourneyLimits:
    daily_cap: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DailyCap' }})
    endpoint_reentry_cap: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointReentryCap' }})
    endpoint_reentry_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointReentryInterval' }})
    messages_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessagesPerSecond' }})
    
