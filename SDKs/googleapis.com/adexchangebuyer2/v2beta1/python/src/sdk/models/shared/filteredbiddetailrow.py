from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FilteredBidDetailRow:
    r"""FilteredBidDetailRow
    The number of filtered bids with the specified dimension values, among those filtered due to the requested filtering reason (for example, creative status), that have the specified detail.
    """
    
    bid_count: Optional[MetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidCount') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    detail_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailId') }})
    row_dimensions: Optional[RowDimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowDimensions') }})
    
