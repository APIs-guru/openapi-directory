from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LastAdminUserRoom:
    r"""LastAdminUserRoom
    Room information
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_admin_in_group: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAdminInGroup') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentPath') }})
    last_admin_in_group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAdminInGroupId') }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentId') }})
    
