from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workloadsummary


@dataclass_json
@dataclass
class ListWorkloadsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    workload_summaries: Optional[List[workloadsummary.WorkloadSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadSummaries' }})
    
