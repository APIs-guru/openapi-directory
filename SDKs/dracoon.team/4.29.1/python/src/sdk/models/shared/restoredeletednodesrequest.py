from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RestoreDeletedNodesRequestResolutionStrategyEnum(str, Enum):
    AUTORENAME = "autorename"
    OVERWRITE = "overwrite"
    FAIL = "fail"


@dataclass_json
@dataclass
class RestoreDeletedNodesRequest:
    r"""RestoreDeletedNodesRequest
    Request model for restoring deleted nodes
    """
    
    deleted_node_ids: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedNodeIds') }})
    keep_share_links: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepShareLinks') }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentId') }})
    resolution_strategy: Optional[RestoreDeletedNodesRequestResolutionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolutionStrategy') }})
    
