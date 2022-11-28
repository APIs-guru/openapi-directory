from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListMilestonesOutput:
    r"""ListMilestonesOutput
    Output of a list milestones call.
    """
    
    milestone_summaries: Optional[List[MilestoneSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MilestoneSummaries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    
