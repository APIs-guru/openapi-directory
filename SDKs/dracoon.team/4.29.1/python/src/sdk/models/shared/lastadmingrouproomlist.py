from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LastAdminGroupRoomList:
    r"""LastAdminGroupRoomList
    List of (last admin group) rooms
    """
    
    items: List[LastAdminGroupRoom] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
