from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FileKeyContainer:
    iv: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iv' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
