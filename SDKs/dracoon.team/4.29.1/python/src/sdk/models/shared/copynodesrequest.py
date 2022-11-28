from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CopyNodesRequestResolutionStrategyEnum(str, Enum):
    AUTORENAME = "autorename"
    OVERWRITE = "overwrite"
    FAIL = "fail"


@dataclass_json
@dataclass
class CopyNodesRequest:
    r"""CopyNodesRequest
    Request model for copying nodes
    """
    
    items: Optional[List[CopyNode]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    keep_share_links: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepShareLinks') }})
    node_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeIds') }})
    resolution_strategy: Optional[CopyNodesRequestResolutionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolutionStrategy') }})
    
