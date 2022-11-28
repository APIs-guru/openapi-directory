from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetRecordsOutput:
    r"""GetRecordsOutput
    Represents the output for <a>GetRecords</a>.
    """
    
    records: List[Record] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Records') }})
    child_shards: Optional[List[ChildShard]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChildShards') }})
    millis_behind_latest: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MillisBehindLatest') }})
    next_shard_iterator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextShardIterator') }})
    
