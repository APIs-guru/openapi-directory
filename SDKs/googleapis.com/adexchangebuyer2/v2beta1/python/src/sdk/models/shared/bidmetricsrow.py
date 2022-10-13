from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import metricvalue
from . import metricvalue
from . import metricvalue
from . import metricvalue
from . import metricvalue
from . import metricvalue
from . import rowdimensions
from . import metricvalue


@dataclass_json
@dataclass
class BidMetricsRow:
    bids: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bids' }})
    bids_in_auction: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidsInAuction' }})
    billed_impressions: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billedImpressions' }})
    impressions_won: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impressionsWon' }})
    measurable_impressions: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurableImpressions' }})
    reached_queries: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reachedQueries' }})
    row_dimensions: Optional[rowdimensions.RowDimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowDimensions' }})
    viewable_impressions: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewableImpressions' }})
    
