from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import activity


@dataclass_json
@dataclass
class UserActivitySession:
    activities: Optional[List[activity.Activity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activities' }})
    data_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSource' }})
    device_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceCategory' }})
    platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    session_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionDate' }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    
