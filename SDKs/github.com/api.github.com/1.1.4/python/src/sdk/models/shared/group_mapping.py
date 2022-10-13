from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupMappingGroups:
    group_description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_description' }})
    group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_id' }})
    group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_name' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    synced_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'synced_at' }})
    

@dataclass_json
@dataclass
class GroupMapping:
    groups: Optional[List[GroupMappingGroups]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    
