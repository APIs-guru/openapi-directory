from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CodeOfConductSimple:
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
