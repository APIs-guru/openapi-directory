from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import callbackstepmetadata
from . import conditionstepmetadata
from . import lambdastepmetadata
from . import modelstepmetadata
from . import processingjobstepmetadata
from . import registermodelstepmetadata
from . import trainingjobstepmetadata
from . import transformjobstepmetadata
from . import tuningjobstepmetadata


@dataclass_json
@dataclass
class PipelineExecutionStepMetadata:
    callback: Optional[callbackstepmetadata.CallbackStepMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Callback' }})
    condition: Optional[conditionstepmetadata.ConditionStepMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Condition' }})
    lambda_: Optional[lambdastepmetadata.LambdaStepMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lambda' }})
    model: Optional[modelstepmetadata.ModelStepMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Model' }})
    processing_job: Optional[processingjobstepmetadata.ProcessingJobStepMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingJob' }})
    register_model: Optional[registermodelstepmetadata.RegisterModelStepMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegisterModel' }})
    training_job: Optional[trainingjobstepmetadata.TrainingJobStepMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJob' }})
    transform_job: Optional[transformjobstepmetadata.TransformJobStepMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformJob' }})
    tuning_job: Optional[tuningjobstepmetadata.TuningJobStepMetaData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TuningJob' }})
    
