from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Language:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
