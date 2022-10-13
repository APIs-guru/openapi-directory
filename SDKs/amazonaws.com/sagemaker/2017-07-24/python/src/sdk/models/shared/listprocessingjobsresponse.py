from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import processingjobsummary


@dataclass_json
@dataclass
class ListProcessingJobsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    processing_job_summaries: List[processingjobsummary.ProcessingJobSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingJobSummaries' }})
    
