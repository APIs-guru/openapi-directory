from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateProcessingJobRequest:
    app_specification: AppSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppSpecification') }})
    processing_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingJobName') }})
    processing_resources: ProcessingResources = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingResources') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    experiment_config: Optional[ExperimentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExperimentConfig') }})
    network_config: Optional[NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkConfig') }})
    processing_inputs: Optional[List[ProcessingInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingInputs') }})
    processing_output_config: Optional[ProcessingOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingOutputConfig') }})
    stopping_condition: Optional[ProcessingStoppingCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppingCondition') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
