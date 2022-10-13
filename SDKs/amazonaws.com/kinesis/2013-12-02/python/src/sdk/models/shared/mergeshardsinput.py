from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MergeShardsInput:
    adjacent_shard_to_merge: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdjacentShardToMerge' }})
    shard_to_merge: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShardToMerge' }})
    stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    
