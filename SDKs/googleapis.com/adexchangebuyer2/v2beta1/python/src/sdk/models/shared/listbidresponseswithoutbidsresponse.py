from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bidresponsewithoutbidsstatusrow


@dataclass_json
@dataclass
class ListBidResponsesWithoutBidsResponse:
    bid_response_without_bids_status_rows: Optional[List[bidresponsewithoutbidsstatusrow.BidResponseWithoutBidsStatusRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidResponseWithoutBidsStatusRows' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
