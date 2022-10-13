from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubscribedUploadShare:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    target_node_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetNodeId' }})
    
