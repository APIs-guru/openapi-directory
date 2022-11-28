from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBidResponsesWithoutBidsResponse:
    r"""ListBidResponsesWithoutBidsResponse
    Response message for listing all reasons that bid responses were considered to have no applicable bids.
    """
    
    bid_response_without_bids_status_rows: Optional[List[BidResponseWithoutBidsStatusRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidResponseWithoutBidsStatusRows') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
