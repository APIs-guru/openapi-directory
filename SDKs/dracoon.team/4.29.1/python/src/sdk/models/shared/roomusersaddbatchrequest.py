from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RoomUsersAddBatchRequest:
    r"""RoomUsersAddBatchRequest
    Request model for granting user(s) to the room
    """
    
    items: List[RoomUsersAddBatchRequestItem] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
