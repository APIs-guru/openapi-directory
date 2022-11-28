from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChildShard:
    hash_key_range: HashKeyRange = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HashKeyRange') }})
    parent_shards: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentShards') }})
    shard_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardId') }})
    
