from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FaultStatistics:
    r"""FaultStatistics
    Information about requests that failed with a 5xx Server Error status code.
    """
    
    other_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCount') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    
