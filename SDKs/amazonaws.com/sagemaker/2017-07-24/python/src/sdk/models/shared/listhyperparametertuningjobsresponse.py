from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hyperparametertuningjobsummary


@dataclass_json
@dataclass
class ListHyperParameterTuningJobsResponse:
    hyper_parameter_tuning_job_summaries: List[hyperparametertuningjobsummary.HyperParameterTuningJobSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HyperParameterTuningJobSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
