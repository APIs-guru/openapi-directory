from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListWorkloadsOutput:
    r"""ListWorkloadsOutput
    Output of a list workloads call.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    workload_summaries: Optional[List[WorkloadSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadSummaries') }})
    
