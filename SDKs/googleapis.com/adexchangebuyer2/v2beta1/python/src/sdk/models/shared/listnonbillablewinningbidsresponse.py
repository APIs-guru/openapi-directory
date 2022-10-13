from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nonbillablewinningbidstatusrow


@dataclass_json
@dataclass
class ListNonBillableWinningBidsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    non_billable_winning_bid_status_rows: Optional[List[nonbillablewinningbidstatusrow.NonBillableWinningBidStatusRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonBillableWinningBidStatusRows' }})
    
