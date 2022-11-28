from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Shard:
    r"""Shard
    A uniquely identified group of stream records within a stream.
    """
    
    parent_shard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentShardId') }})
    sequence_number_range: Optional[SequenceNumberRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SequenceNumberRange') }})
    shard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardId') }})
    
