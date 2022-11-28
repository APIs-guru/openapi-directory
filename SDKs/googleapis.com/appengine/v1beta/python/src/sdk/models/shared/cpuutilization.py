from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CPUUtilization:
    r"""CPUUtilization
    Target scaling by CPU usage.
    """
    
    aggregation_window_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationWindowLength') }})
    target_utilization: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetUtilization') }})
    
