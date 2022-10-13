from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class RestoreDeletedNodesRequestResolutionStrategyEnum(str, Enum):
    AUTORENAME = "autorename"
    OVERWRITE = "overwrite"
    FAIL = "fail"


@dataclass_json
@dataclass
class RestoreDeletedNodesRequest:
    deleted_node_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedNodeIds' }})
    keep_share_links: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keepShareLinks' }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentId' }})
    resolution_strategy: Optional[RestoreDeletedNodesRequestResolutionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolutionStrategy' }})
    
