from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LastAdminUserRoomList:
    r"""LastAdminUserRoomList
    List of (last admin user) rooms
    """
    
    items: List[LastAdminUserRoom] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
