from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SubscribedNodeTypeEnum(str, Enum):
    ROOM = "room"
    FOLDER = "folder"
    FILE = "file"


@dataclass_json
@dataclass
class SubscribedNode:
    r"""SubscribedNode
    Subscribed node information
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    auth_parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authParentId') }})
    type: Optional[SubscribedNodeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
