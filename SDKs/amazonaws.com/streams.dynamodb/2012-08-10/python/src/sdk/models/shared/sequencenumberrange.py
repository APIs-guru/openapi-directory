from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SequenceNumberRange:
    r"""SequenceNumberRange
    The beginning and ending sequence numbers for the stream records contained within a shard.
    """
    
    ending_sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndingSequenceNumber') }})
    starting_sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartingSequenceNumber') }})
    
