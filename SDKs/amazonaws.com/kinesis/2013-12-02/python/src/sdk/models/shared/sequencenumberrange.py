from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SequenceNumberRange:
    r"""SequenceNumberRange
    The range of possible sequence numbers for the shard.
    """
    
    starting_sequence_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartingSequenceNumber') }})
    ending_sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndingSequenceNumber') }})
    
