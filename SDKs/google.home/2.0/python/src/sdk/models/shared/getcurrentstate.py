from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Getcurrentstate:
    notifications_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifications_enabled' }})
    
