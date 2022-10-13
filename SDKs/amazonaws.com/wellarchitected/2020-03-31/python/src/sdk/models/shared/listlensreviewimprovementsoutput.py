from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import improvementsummary


@dataclass_json
@dataclass
class ListLensReviewImprovementsOutput:
    improvement_summaries: Optional[List[improvementsummary.ImprovementSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImprovementSummaries' }})
    lens_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LensAlias' }})
    milestone_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MilestoneNumber' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadId' }})
    
