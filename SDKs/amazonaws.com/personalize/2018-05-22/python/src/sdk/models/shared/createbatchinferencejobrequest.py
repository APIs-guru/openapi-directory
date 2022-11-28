from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateBatchInferenceJobRequest:
    job_input: BatchInferenceJobInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobInput') }})
    job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobName') }})
    job_output: BatchInferenceJobOutput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobOutput') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    solution_version_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionVersionArn') }})
    batch_inference_job_config: Optional[BatchInferenceJobConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchInferenceJobConfig') }})
    filter_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterArn') }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numResults') }})
    
