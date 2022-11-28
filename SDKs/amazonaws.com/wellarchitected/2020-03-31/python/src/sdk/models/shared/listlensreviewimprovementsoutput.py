from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListLensReviewImprovementsOutput:
    r"""ListLensReviewImprovementsOutput
    Output of a list lens review improvements call.
    """
    
    improvement_summaries: Optional[List[ImprovementSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImprovementSummaries') }})
    lens_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensAlias') }})
    milestone_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MilestoneNumber') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    
