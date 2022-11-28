from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ShardConfigurationRequest:
    r"""ShardConfigurationRequest
    A request to configure the sharding properties of a cluster
    """
    
    shard_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardCount') }})
    
