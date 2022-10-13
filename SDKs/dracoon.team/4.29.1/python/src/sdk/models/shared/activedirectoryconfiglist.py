from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import activedirectoryconfig


@dataclass_json
@dataclass
class ActiveDirectoryConfigList:
    items: List[activedirectoryconfig.ActiveDirectoryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
