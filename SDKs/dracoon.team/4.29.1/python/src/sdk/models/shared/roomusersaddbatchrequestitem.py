from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RoomUsersAddBatchRequestItem:
    r"""RoomUsersAddBatchRequestItem
    Request item model for granting user to the room
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    permissions: NodePermissions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
