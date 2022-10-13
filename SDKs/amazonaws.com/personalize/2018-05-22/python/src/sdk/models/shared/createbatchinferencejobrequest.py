from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import batchinferencejobconfig
from . import batchinferencejobinput
from . import batchinferencejoboutput


@dataclass_json
@dataclass
class CreateBatchInferenceJobRequest:
    batch_inference_job_config: Optional[batchinferencejobconfig.BatchInferenceJobConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchInferenceJobConfig' }})
    filter_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterArn' }})
    job_input: batchinferencejobinput.BatchInferenceJobInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobInput' }})
    job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobName' }})
    job_output: batchinferencejoboutput.BatchInferenceJobOutput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobOutput' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numResults' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    solution_version_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solutionVersionArn' }})
    
