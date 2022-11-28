from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FinishedWorldsSummary:
    r"""FinishedWorldsSummary
    Information about worlds that finished.
    """
    
    failure_summary: Optional[FailureSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureSummary') }})
    finished_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finishedCount') }})
    succeeded_worlds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('succeededWorlds') }})
    
