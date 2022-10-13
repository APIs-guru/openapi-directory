from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import group


@dataclass_json
@dataclass
class UpdateGroupResult:
    group: Optional[group.Group] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Group' }})
    
