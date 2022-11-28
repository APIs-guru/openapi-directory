from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RequestImpactStatistics:
    r"""RequestImpactStatistics
    Statistics that describe how the incident has impacted a service.
    """
    
    fault_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaultCount') }})
    ok_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OkCount') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCount') }})
    
