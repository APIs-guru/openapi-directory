from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Tag:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_content' }})
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    authorname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorname' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    machine_tag: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machine_tag' }})
    raw: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'raw' }})
    
