from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workloadsharesummary


@dataclass_json
@dataclass
class ListWorkloadSharesOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadId' }})
    workload_share_summaries: Optional[List[workloadsharesummary.WorkloadShareSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadShareSummaries' }})
    
