from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EdgeStatistics:
    r"""EdgeStatistics
    Response statistics for an edge.
    """
    
    error_statistics: Optional[ErrorStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorStatistics') }})
    fault_statistics: Optional[FaultStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaultStatistics') }})
    ok_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OkCount') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    total_response_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalResponseTime') }})
    
