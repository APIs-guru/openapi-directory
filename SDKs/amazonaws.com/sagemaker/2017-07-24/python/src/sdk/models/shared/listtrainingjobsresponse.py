from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trainingjobsummary


@dataclass_json
@dataclass
class ListTrainingJobsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    training_job_summaries: List[trainingjobsummary.TrainingJobSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobSummaries' }})
    
