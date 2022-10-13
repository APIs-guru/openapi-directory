from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FileKey:
    iv: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iv' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    tag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
