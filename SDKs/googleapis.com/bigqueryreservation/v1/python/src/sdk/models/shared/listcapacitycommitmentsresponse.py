from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCapacityCommitmentsResponse:
    r"""ListCapacityCommitmentsResponse
    The response for ReservationService.ListCapacityCommitments.
    """
    
    capacity_commitments: Optional[List[CapacityCommitment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityCommitments') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
