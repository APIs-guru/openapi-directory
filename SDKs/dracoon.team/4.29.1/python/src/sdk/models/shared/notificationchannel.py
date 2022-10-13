from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NotificationChannel:
    frequency: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEnabled' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
