from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Example15:
    display_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_string' }})
    locale: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    
