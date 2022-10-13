from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lensreviewsummary


@dataclass_json
@dataclass
class ListLensReviewsOutput:
    lens_review_summaries: Optional[List[lensreviewsummary.LensReviewSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LensReviewSummaries' }})
    milestone_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MilestoneNumber' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadId' }})
    
