from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SplitCapacityCommitmentRequest:
    r"""SplitCapacityCommitmentRequest
    The request for ReservationService.SplitCapacityCommitment.
    """
    
    slot_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotCount') }})
    
