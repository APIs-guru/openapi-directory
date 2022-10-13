from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InputLogEvent:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    timestamp: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    
