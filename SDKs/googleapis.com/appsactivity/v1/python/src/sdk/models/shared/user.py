from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class User:
    r"""User
    A representation of a user.
    """
    
    is_deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDeleted') }})
    is_me: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMe') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    permission_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionId') }})
    photo: Optional[Photo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photo') }})
    
