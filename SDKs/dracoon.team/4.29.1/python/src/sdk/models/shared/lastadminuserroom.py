from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LastAdminUserRoom:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_admin_in_group: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastAdminInGroup' }})
    last_admin_in_group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastAdminInGroupId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentId' }})
    parent_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentPath' }})
    
