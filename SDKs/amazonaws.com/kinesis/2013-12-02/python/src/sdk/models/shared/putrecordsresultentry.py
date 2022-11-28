from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PutRecordsResultEntry:
    r"""PutRecordsResultEntry
    Represents the result of an individual record from a <code>PutRecords</code> request. A record that is successfully added to a stream includes <code>SequenceNumber</code> and <code>ShardId</code> in the result. A record that fails to be added to the stream includes <code>ErrorCode</code> and <code>ErrorMessage</code> in the result.
    """
    
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SequenceNumber') }})
    shard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardId') }})
    
