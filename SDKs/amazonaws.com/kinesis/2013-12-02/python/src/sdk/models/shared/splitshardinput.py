from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SplitShardInput:
    new_starting_hash_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewStartingHashKey' }})
    shard_to_split: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShardToSplit' }})
    stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    
