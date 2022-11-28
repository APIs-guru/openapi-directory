from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFilteredBidsResponse:
    r"""ListFilteredBidsResponse
    Response message for listing all reasons that bids were filtered from the auction.
    """
    
    creative_status_rows: Optional[List[CreativeStatusRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeStatusRows') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
