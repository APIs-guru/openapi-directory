from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GroupMappingGroups:
    group_description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_description') }})
    group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_id') }})
    group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_name') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    synced_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synced_at') }})
    

@dataclass_json
@dataclass
class GroupMapping:
    r"""GroupMapping
    External Groups to be mapped to a team for membership
    """
    
    groups: Optional[List[GroupMappingGroups]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
