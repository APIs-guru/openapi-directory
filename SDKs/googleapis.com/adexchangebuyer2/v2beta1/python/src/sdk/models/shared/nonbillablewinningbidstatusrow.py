from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class NonBillableWinningBidStatusRowStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    AD_NOT_RENDERED = "AD_NOT_RENDERED"
    INVALID_IMPRESSION = "INVALID_IMPRESSION"
    FATAL_VAST_ERROR = "FATAL_VAST_ERROR"
    LOST_IN_MEDIATION = "LOST_IN_MEDIATION"


@dataclass_json
@dataclass
class NonBillableWinningBidStatusRow:
    r"""NonBillableWinningBidStatusRow
    The number of winning bids with the specified dimension values for which the buyer was not billed, as described by the specified status.
    """
    
    bid_count: Optional[MetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidCount') }})
    row_dimensions: Optional[RowDimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowDimensions') }})
    status: Optional[NonBillableWinningBidStatusRowStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
