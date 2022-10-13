from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResourceLimits:
    max_number_of_training_jobs: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxNumberOfTrainingJobs' }})
    max_parallel_training_jobs: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxParallelTrainingJobs' }})
    
