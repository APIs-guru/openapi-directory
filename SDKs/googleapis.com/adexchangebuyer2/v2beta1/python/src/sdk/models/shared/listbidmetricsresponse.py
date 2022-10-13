from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bidmetricsrow


@dataclass_json
@dataclass
class ListBidMetricsResponse:
    bid_metrics_rows: Optional[List[bidmetricsrow.BidMetricsRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidMetricsRows' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
