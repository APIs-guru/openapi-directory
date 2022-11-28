from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFilteredBidRequestsResponse:
    r"""ListFilteredBidRequestsResponse
    Response message for listing all reasons that bid requests were filtered and not sent to the buyer.
    """
    
    callout_status_rows: Optional[List[CalloutStatusRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calloutStatusRows') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
