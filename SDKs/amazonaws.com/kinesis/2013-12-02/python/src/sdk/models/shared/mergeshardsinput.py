from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MergeShardsInput:
    r"""MergeShardsInput
    Represents the input for <code>MergeShards</code>.
    """
    
    adjacent_shard_to_merge: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdjacentShardToMerge') }})
    shard_to_merge: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardToMerge') }})
    stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    
