from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateTransformJobRequest:
    model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    transform_input: TransformInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformInput') }})
    transform_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformJobName') }})
    transform_output: TransformOutput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformOutput') }})
    transform_resources: TransformResources = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformResources') }})
    batch_strategy: Optional[BatchStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchStrategy') }})
    data_processing: Optional[DataProcessing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataProcessing') }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    experiment_config: Optional[ExperimentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExperimentConfig') }})
    max_concurrent_transforms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxConcurrentTransforms') }})
    max_payload_in_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxPayloadInMB') }})
    model_client_config: Optional[ModelClientConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelClientConfig') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
