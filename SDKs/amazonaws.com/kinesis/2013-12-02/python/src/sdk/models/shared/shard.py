from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import hashkeyrange
from . import sequencenumberrange


@dataclass_json
@dataclass
class Shard:
    adjacent_parent_shard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdjacentParentShardId' }})
    hash_key_range: hashkeyrange.HashKeyRange = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HashKeyRange' }})
    parent_shard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentShardId' }})
    sequence_number_range: sequencenumberrange.SequenceNumberRange = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SequenceNumberRange' }})
    shard_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShardId' }})
    
