from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Example14:
    display_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_string' }})
    offset: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    timezone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    
