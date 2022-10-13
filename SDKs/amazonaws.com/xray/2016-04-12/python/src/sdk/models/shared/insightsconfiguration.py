from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InsightsConfiguration:
    insights_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightsEnabled' }})
    notifications_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationsEnabled' }})
    
