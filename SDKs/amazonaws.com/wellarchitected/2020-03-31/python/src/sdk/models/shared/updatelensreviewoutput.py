from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import lensreview


@dataclass_json
@dataclass
class UpdateLensReviewOutput:
    lens_review: Optional[lensreview.LensReview] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LensReview' }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadId' }})
    
