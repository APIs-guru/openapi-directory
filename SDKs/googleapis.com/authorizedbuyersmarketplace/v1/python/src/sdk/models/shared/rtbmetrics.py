from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RtbMetrics:
    r"""RtbMetrics
    Real-time bidding metrics. For what each metric means refer to [Report metrics](https://support.google.com/adxbuyer/answer/6115195#report-metrics)
    """
    
    ad_impressions7_days: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adImpressions7Days') }})
    bid_rate7_days: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidRate7Days') }})
    bid_requests7_days: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidRequests7Days') }})
    bids7_days: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bids7Days') }})
    filtered_bid_rate7_days: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filteredBidRate7Days') }})
    must_bid_rate_current_month: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mustBidRateCurrentMonth') }})
    
