from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PutRecordInput:
    r"""PutRecordInput
    Represents the input for <code>PutRecord</code>.
    """
    
    data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    partition_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionKey') }})
    stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    explicit_hash_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExplicitHashKey') }})
    sequence_number_for_ordering: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SequenceNumberForOrdering') }})
    
