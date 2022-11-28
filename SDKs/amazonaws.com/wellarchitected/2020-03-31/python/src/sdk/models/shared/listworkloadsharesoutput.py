from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListWorkloadSharesOutput:
    r"""ListWorkloadSharesOutput
    Input for List Workload Share
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    workload_share_summaries: Optional[List[WorkloadShareSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadShareSummaries') }})
    
