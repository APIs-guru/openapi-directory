from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutRecordInput:
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    explicit_hash_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExplicitHashKey' }})
    partition_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionKey' }})
    sequence_number_for_ordering: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SequenceNumberForOrdering' }})
    stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    
