from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import roomdata
from . import range


@dataclass_json
@dataclass
class RoomTreeDataList:
    items: List[roomdata.RoomData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    range: range.Range = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
