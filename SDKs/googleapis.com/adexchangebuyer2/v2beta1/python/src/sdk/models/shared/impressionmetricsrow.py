from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import metricvalue
from . import metricvalue
from . import metricvalue
from . import metricvalue
from . import rowdimensions
from . import metricvalue


@dataclass_json
@dataclass
class ImpressionMetricsRow:
    available_impressions: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableImpressions' }})
    bid_requests: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidRequests' }})
    inventory_matches: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryMatches' }})
    responses_with_bids: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responsesWithBids' }})
    row_dimensions: Optional[rowdimensions.RowDimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowDimensions' }})
    successful_responses: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successfulResponses' }})
    
