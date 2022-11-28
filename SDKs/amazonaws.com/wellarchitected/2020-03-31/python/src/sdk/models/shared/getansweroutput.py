from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetAnswerOutput:
    r"""GetAnswerOutput
    Output of a get answer call.
    """
    
    answer: Optional[Answer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Answer') }})
    lens_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensAlias') }})
    milestone_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MilestoneNumber') }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    
