from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AutoMlJobCompletionCriteria:
    max_auto_ml_job_runtime_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxAutoMLJobRuntimeInSeconds' }})
    max_candidates: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxCandidates' }})
    max_runtime_per_training_job_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxRuntimePerTrainingJobInSeconds' }})
    
