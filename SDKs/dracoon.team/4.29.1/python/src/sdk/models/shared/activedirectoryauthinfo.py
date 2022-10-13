from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import activedirectory


@dataclass_json
@dataclass
class ActiveDirectoryAuthInfo:
    items: List[activedirectory.ActiveDirectory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
