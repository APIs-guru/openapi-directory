from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListNonBillableWinningBidsResponse:
    r"""ListNonBillableWinningBidsResponse
    Response message for listing all reasons for which a buyer was not billed for a winning bid.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    non_billable_winning_bid_status_rows: Optional[List[NonBillableWinningBidStatusRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonBillableWinningBidStatusRows') }})
    
