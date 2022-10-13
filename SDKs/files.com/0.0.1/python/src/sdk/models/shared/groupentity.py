from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupEntity:
    admin_ids: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin_ids' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    user_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_ids' }})
    usernames: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usernames' }})
    
