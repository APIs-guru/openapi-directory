from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import roomgroupsaddbatchrequestitem


@dataclass_json
@dataclass
class RoomGroupsAddBatchRequest:
    items: List[roomgroupsaddbatchrequestitem.RoomGroupsAddBatchRequestItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
