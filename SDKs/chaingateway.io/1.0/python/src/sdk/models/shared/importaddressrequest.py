from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import content


@dataclass_json
@dataclass
class ImportAddressRequest:
    content: content.Content = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    filename: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    
