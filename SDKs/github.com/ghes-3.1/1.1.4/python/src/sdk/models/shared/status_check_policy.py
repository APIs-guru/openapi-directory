from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StatusCheckPolicy:
    contexts: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contexts' }})
    contexts_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contexts_url' }})
    strict: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strict' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
