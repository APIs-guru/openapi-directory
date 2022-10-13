from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alarm


@dataclass_json
@dataclass
class AutoRollbackConfig:
    alarms: Optional[List[alarm.Alarm]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Alarms' }})
    
