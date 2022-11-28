from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetLensReviewReportOutput:
    r"""GetLensReviewReportOutput
    Output of a get lens review report call.
    """
    
    lens_review_report: Optional[LensReviewReport] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensReviewReport') }})
    milestone_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MilestoneNumber') }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    
