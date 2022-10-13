from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import waittime


@dataclass_json
@dataclass
class WaitActivity:
    next_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextActivity' }})
    wait_time: Optional[waittime.WaitTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WaitTime' }})
    
