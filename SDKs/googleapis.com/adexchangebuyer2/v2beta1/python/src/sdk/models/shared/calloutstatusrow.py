from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CalloutStatusRow:
    r"""CalloutStatusRow
    The number of impressions with the specified dimension values where the corresponding bid request or bid response was not successful, as described by the specified callout status.
    """
    
    callout_status_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calloutStatusId') }})
    impression_count: Optional[MetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionCount') }})
    row_dimensions: Optional[RowDimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowDimensions') }})
    
