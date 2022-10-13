from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sequencenumberrange


@dataclass_json
@dataclass
class Shard:
    parent_shard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentShardId' }})
    sequence_number_range: Optional[sequencenumberrange.SequenceNumberRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SequenceNumberRange' }})
    shard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShardId' }})
    
