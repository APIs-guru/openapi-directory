from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import record


@dataclass_json
@dataclass
class GetRecordsOutput:
    next_shard_iterator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextShardIterator' }})
    records: Optional[List[record.Record]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Records' }})
    
