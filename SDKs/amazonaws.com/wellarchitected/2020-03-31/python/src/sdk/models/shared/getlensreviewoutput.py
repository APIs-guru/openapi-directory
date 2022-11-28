from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetLensReviewOutput:
    r"""GetLensReviewOutput
    Output of a get lens review call.
    """
    
    lens_review: Optional[LensReview] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensReview') }})
    milestone_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MilestoneNumber') }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    
