from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import edgepackagingjobsummary


@dataclass_json
@dataclass
class ListEdgePackagingJobsResponse:
    edge_packaging_job_summaries: List[edgepackagingjobsummary.EdgePackagingJobSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EdgePackagingJobSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
