from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import lastadmingrouproom


@dataclass_json
@dataclass
class LastAdminGroupRoomList:
    items: List[lastadmingrouproom.LastAdminGroupRoom] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
