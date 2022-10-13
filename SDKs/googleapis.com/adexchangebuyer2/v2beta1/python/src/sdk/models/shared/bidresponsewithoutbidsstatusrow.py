from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import metricvalue
from . import rowdimensions

class BidResponseWithoutBidsStatusRowStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    RESPONSES_WITHOUT_BIDS = "RESPONSES_WITHOUT_BIDS"
    RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT = "RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT"
    RESPONSES_WITHOUT_BIDS_FOR_DEAL = "RESPONSES_WITHOUT_BIDS_FOR_DEAL"


@dataclass_json
@dataclass
class BidResponseWithoutBidsStatusRow:
    impression_count: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impressionCount' }})
    row_dimensions: Optional[rowdimensions.RowDimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowDimensions' }})
    status: Optional[BidResponseWithoutBidsStatusRowStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
