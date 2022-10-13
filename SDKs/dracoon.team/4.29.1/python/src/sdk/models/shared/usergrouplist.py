from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import usergroup
from . import range


@dataclass_json
@dataclass
class UserGroupList:
    items: List[usergroup.UserGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    range: range.Range = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
