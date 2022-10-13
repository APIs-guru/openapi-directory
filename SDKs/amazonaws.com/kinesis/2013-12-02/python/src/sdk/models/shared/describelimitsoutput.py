from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeLimitsOutput:
    open_shard_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpenShardCount' }})
    shard_limit: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShardLimit' }})
    
