from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBidMetricsResponse:
    r"""ListBidMetricsResponse
    Response message for listing the metrics that are measured in number of bids.
    """
    
    bid_metrics_rows: Optional[List[BidMetricsRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidMetricsRows') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
