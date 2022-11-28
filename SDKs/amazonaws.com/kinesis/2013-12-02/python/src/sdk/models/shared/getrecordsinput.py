from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetRecordsInput:
    r"""GetRecordsInput
    Represents the input for <a>GetRecords</a>.
    """
    
    shard_iterator: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardIterator') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    
