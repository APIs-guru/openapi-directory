from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import milestonesummary


@dataclass_json
@dataclass
class ListMilestonesOutput:
    milestone_summaries: Optional[List[milestonesummary.MilestoneSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MilestoneSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadId' }})
    
