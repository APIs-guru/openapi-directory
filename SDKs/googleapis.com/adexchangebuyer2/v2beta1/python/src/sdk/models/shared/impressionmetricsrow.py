from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImpressionMetricsRow:
    r"""ImpressionMetricsRow
    The set of metrics that are measured in numbers of impressions, representing how many impressions with the specified dimension values were considered eligible at each stage of the bidding funnel.
    """
    
    available_impressions: Optional[MetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableImpressions') }})
    bid_requests: Optional[MetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidRequests') }})
    inventory_matches: Optional[MetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryMatches') }})
    responses_with_bids: Optional[MetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responsesWithBids') }})
    row_dimensions: Optional[RowDimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowDimensions') }})
    successful_responses: Optional[MetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successfulResponses') }})
    
