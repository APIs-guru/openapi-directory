from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchRunPivotReportsResponse:
    r"""BatchRunPivotReportsResponse
    The batch response containing multiple pivot reports.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    pivot_reports: Optional[List[RunPivotReportResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivotReports') }})
    
