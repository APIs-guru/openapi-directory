from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RoomUsersDeleteBatchRequest:
    r"""RoomUsersDeleteBatchRequest
    Request model for revoking user(s) from the room
    """
    
    ids: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    
