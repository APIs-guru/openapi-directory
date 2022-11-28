from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TrafficSplitShardByEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    COOKIE = "COOKIE"
    IP = "IP"
    RANDOM = "RANDOM"


@dataclass_json
@dataclass
class TrafficSplit:
    r"""TrafficSplit
    Traffic routing configuration for versions within a single service. Traffic splits define how traffic directed to the service is assigned to versions.
    """
    
    allocations: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocations') }})
    shard_by: Optional[TrafficSplitShardByEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shardBy') }})
    
