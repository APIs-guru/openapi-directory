from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActivityTaskStatus:
    cancel_requested: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelRequested' }})
    
