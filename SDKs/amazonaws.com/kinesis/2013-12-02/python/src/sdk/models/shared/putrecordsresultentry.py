from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutRecordsResultEntry:
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SequenceNumber' }})
    shard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShardId' }})
    
