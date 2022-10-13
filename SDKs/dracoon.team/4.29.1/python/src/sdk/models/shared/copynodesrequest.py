from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import copynode

class CopyNodesRequestResolutionStrategyEnum(str, Enum):
    AUTORENAME = "autorename"
    OVERWRITE = "overwrite"
    FAIL = "fail"


@dataclass_json
@dataclass
class CopyNodesRequest:
    items: Optional[List[copynode.CopyNode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    keep_share_links: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keepShareLinks' }})
    node_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeIds' }})
    resolution_strategy: Optional[CopyNodesRequestResolutionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolutionStrategy' }})
    
