from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HpoResourceConfig:
    max_number_of_training_jobs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxNumberOfTrainingJobs' }})
    max_parallel_training_jobs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxParallelTrainingJobs' }})
    
