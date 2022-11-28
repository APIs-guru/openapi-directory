from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeLimitsOutput:
    open_shard_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenShardCount') }})
    shard_limit: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardLimit') }})
    
