from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RealtimeTimeRange:
    r"""RealtimeTimeRange
    An open-ended realtime time range specified by the start timestamp. For filter sets that specify a realtime time range RTB metrics continue to be aggregated throughout the lifetime of the filter set.
    """
    
    start_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimestamp') }})
    
