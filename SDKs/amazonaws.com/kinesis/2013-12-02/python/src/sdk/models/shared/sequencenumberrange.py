from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SequenceNumberRange:
    ending_sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndingSequenceNumber' }})
    starting_sequence_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartingSequenceNumber' }})
    
