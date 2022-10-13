from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TrafficSplitShardByEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    COOKIE = "COOKIE"
    IP = "IP"
    RANDOM = "RANDOM"


@dataclass_json
@dataclass
class TrafficSplit:
    allocations: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allocations' }})
    shard_by: Optional[TrafficSplitShardByEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shardBy' }})
    
