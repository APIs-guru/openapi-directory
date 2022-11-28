from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Shard:
    r"""Shard
    A uniquely identified group of data records in a Kinesis data stream.
    """
    
    hash_key_range: HashKeyRange = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HashKeyRange') }})
    sequence_number_range: SequenceNumberRange = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SequenceNumberRange') }})
    shard_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardId') }})
    adjacent_parent_shard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdjacentParentShardId') }})
    parent_shard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentShardId') }})
    
