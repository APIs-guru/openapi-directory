from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PipelineExecutionStepMetadata:
    r"""PipelineExecutionStepMetadata
    Metadata for a step execution.
    """
    
    callback: Optional[CallbackStepMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Callback') }})
    condition: Optional[ConditionStepMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Condition') }})
    lambda_: Optional[LambdaStepMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lambda') }})
    model: Optional[ModelStepMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Model') }})
    processing_job: Optional[ProcessingJobStepMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingJob') }})
    register_model: Optional[RegisterModelStepMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegisterModel') }})
    training_job: Optional[TrainingJobStepMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJob') }})
    transform_job: Optional[TransformJobStepMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformJob') }})
    tuning_job: Optional[TuningJobStepMetaData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TuningJob') }})
    
