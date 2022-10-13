from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import lensreviewreport


@dataclass_json
@dataclass
class GetLensReviewReportOutput:
    lens_review_report: Optional[lensreviewreport.LensReviewReport] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LensReviewReport' }})
    milestone_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MilestoneNumber' }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadId' }})
    
