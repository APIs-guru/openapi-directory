from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BidMetricsRow:
    r"""BidMetricsRow
    The set of metrics that are measured in numbers of bids, representing how many bids with the specified dimension values were considered eligible at each stage of the bidding funnel;
    """
    
    bids: Optional[MetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bids') }})
    bids_in_auction: Optional[MetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidsInAuction') }})
    billed_impressions: Optional[MetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billedImpressions') }})
    impressions_won: Optional[MetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionsWon') }})
    measurable_impressions: Optional[MetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurableImpressions') }})
    reached_queries: Optional[MetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reachedQueries') }})
    row_dimensions: Optional[RowDimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowDimensions') }})
    viewable_impressions: Optional[MetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewableImpressions') }})
    
