from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RtbMetrics:
    ad_impressions7_days: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adImpressions7Days' }})
    bid_rate7_days: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidRate7Days' }})
    bid_requests7_days: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidRequests7Days' }})
    bids7_days: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bids7Days' }})
    filtered_bid_rate7_days: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filteredBidRate7Days' }})
    must_bid_rate_current_month: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mustBidRateCurrentMonth' }})
    
