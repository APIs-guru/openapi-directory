from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SubscribedNodeTypeEnum(str, Enum):
    ROOM = "room"
    FOLDER = "folder"
    FILE = "file"


@dataclass_json
@dataclass
class SubscribedNode:
    auth_parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authParentId' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[SubscribedNodeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
