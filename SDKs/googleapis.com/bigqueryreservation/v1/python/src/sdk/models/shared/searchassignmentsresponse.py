from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchAssignmentsResponse:
    r"""SearchAssignmentsResponse
    The response for ReservationService.SearchAssignments.
    """
    
    assignments: Optional[List[Assignment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignments') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
