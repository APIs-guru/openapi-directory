from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import queue
from . import useractivity


@dataclass_json
@dataclass
class UpdateActivityResponse:
    queue: Optional[queue.Queue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queue' }})
    user_activity: Optional[useractivity.UserActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userActivity' }})
    
