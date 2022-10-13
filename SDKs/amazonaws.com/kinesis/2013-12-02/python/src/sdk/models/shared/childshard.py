from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import hashkeyrange


@dataclass_json
@dataclass
class ChildShard:
    hash_key_range: hashkeyrange.HashKeyRange = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HashKeyRange' }})
    parent_shards: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentShards' }})
    shard_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShardId' }})
    
