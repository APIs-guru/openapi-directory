from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScheduleKeyDeletionRequest:
    key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    pending_window_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PendingWindowInDays' }})
    
