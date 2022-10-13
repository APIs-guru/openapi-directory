from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Message:
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    from_: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    
