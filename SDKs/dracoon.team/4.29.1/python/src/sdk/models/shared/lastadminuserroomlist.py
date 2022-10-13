from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import lastadminuserroom


@dataclass_json
@dataclass
class LastAdminUserRoomList:
    items: List[lastadminuserroom.LastAdminUserRoom] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
