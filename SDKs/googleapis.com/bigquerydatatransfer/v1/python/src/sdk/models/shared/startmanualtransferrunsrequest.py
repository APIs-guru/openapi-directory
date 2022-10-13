from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timerange


@dataclass_json
@dataclass
class StartManualTransferRunsRequest:
    requested_run_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedRunTime' }})
    requested_time_range: Optional[timerange.TimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedTimeRange' }})
    
