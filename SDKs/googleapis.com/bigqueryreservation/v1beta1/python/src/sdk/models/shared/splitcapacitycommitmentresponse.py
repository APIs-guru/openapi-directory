from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SplitCapacityCommitmentResponse:
    r"""SplitCapacityCommitmentResponse
    The response for ReservationService.SplitCapacityCommitment.
    """
    
    first: Optional[CapacityCommitment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    second: Optional[CapacityCommitment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('second') }})
    
