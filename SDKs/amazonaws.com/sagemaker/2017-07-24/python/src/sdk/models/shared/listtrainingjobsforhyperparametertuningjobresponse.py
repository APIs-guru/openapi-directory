from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hyperparametertrainingjobsummary


@dataclass_json
@dataclass
class ListTrainingJobsForHyperParameterTuningJobResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    training_job_summaries: List[hyperparametertrainingjobsummary.HyperParameterTrainingJobSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobSummaries' }})
    
