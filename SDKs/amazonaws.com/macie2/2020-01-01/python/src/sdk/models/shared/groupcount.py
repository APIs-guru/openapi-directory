from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupCount:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    group_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupKey' }})
    
