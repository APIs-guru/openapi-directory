from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchRunReportsResponse:
    r"""BatchRunReportsResponse
    The batch response containing multiple reports.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    reports: Optional[List[RunReportResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reports') }})
    
