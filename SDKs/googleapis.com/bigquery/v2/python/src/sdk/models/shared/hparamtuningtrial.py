from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import evaluationmetrics
from . import evaluationmetrics
from . import trainingoptions

class HparamTuningTrialStatusEnum(str, Enum):
    TRIAL_STATUS_UNSPECIFIED = "TRIAL_STATUS_UNSPECIFIED"
    NOT_STARTED = "NOT_STARTED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    INFEASIBLE = "INFEASIBLE"
    STOPPED_EARLY = "STOPPED_EARLY"


@dataclass_json
@dataclass
class HparamTuningTrial:
    end_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTimeMs' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    eval_loss: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evalLoss' }})
    evaluation_metrics: Optional[evaluationmetrics.EvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationMetrics' }})
    hparam_tuning_evaluation_metrics: Optional[evaluationmetrics.EvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hparamTuningEvaluationMetrics' }})
    hparams: Optional[trainingoptions.TrainingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hparams' }})
    start_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimeMs' }})
    status: Optional[HparamTuningTrialStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    training_loss: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingLoss' }})
    trial_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialId' }})
    
