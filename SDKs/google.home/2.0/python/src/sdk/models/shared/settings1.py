from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Settings1:
    control_notifications: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'control_notifications' }})
    
