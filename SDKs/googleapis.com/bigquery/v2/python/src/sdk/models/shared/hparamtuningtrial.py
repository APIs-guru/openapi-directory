from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""HparamTuningTrial
    Training info of a trial in [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models.
    """
    
    end_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTimeMs') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    eval_loss: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evalLoss') }})
    evaluation_metrics: Optional[EvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationMetrics') }})
    hparam_tuning_evaluation_metrics: Optional[EvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hparamTuningEvaluationMetrics') }})
    hparams: Optional[TrainingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hparams') }})
    start_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeMs') }})
    status: Optional[HparamTuningTrialStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    training_loss: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingLoss') }})
    trial_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialId') }})
    
