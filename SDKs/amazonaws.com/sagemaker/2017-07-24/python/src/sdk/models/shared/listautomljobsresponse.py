from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import automljobsummary


@dataclass_json
@dataclass
class ListAutoMlJobsResponse:
    auto_ml_job_summaries: List[automljobsummary.AutoMlJobSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLJobSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
