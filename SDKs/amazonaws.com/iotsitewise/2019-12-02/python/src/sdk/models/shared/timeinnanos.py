from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimeInNanos:
    r"""TimeInNanos
    Contains a timestamp with optional nanosecond granularity.
    """
    
    time_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeInSeconds') }})
    offset_in_nanos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetInNanos') }})
    
