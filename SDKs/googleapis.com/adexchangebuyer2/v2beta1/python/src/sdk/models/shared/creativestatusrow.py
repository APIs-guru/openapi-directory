from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreativeStatusRow:
    r"""CreativeStatusRow
    The number of bids with the specified dimension values that did not win the auction (either were filtered pre-auction or lost the auction), as described by the specified creative status.
    """
    
    bid_count: Optional[MetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidCount') }})
    creative_status_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeStatusId') }})
    row_dimensions: Optional[RowDimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowDimensions') }})
    
