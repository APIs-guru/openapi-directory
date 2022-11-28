from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetMilestoneOutput:
    r"""GetMilestoneOutput
    Output of a get milestone call.
    """
    
    milestone: Optional[Milestone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Milestone') }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    
