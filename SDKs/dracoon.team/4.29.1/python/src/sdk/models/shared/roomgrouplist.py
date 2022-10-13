from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import roomgroup
from . import range


@dataclass_json
@dataclass
class RoomGroupList:
    items: List[roomgroup.RoomGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    range: range.Range = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
