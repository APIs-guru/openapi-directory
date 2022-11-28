from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PerformanceReportList:
    r"""PerformanceReportList
    The configuration data for an Ad Exchange performance report list.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    performance_report: Optional[List[PerformanceReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceReport') }})
    
