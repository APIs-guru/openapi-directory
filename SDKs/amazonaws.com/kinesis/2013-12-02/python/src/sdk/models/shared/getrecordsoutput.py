from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import childshard
from . import record


@dataclass_json
@dataclass
class GetRecordsOutput:
    child_shards: Optional[List[childshard.ChildShard]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChildShards' }})
    millis_behind_latest: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MillisBehindLatest' }})
    next_shard_iterator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextShardIterator' }})
    records: List[record.Record] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Records' }})
    
