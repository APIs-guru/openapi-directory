from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LockEntity:
    r"""LockEntity
    List Locks by path
    """
    
    allow_access_by_any_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_access_by_any_user') }})
    depth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('depth') }})
    exclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusive') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    recursive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recursive') }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
