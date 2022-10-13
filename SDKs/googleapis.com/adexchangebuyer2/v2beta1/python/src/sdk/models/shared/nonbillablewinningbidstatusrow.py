from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import metricvalue
from . import rowdimensions

class NonBillableWinningBidStatusRowStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    AD_NOT_RENDERED = "AD_NOT_RENDERED"
    INVALID_IMPRESSION = "INVALID_IMPRESSION"
    FATAL_VAST_ERROR = "FATAL_VAST_ERROR"
    LOST_IN_MEDIATION = "LOST_IN_MEDIATION"


@dataclass_json
@dataclass
class NonBillableWinningBidStatusRow:
    bid_count: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidCount' }})
    row_dimensions: Optional[rowdimensions.RowDimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowDimensions' }})
    status: Optional[NonBillableWinningBidStatusRowStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
