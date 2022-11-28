from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HyperParameterTrainingJobSummary:
    r"""HyperParameterTrainingJobSummary
    Specifies summary information about a training job.
    """
    
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_job_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobArn') }})
    training_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobName') }})
    training_job_status: TrainingJobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobStatus') }})
    tuned_hyper_parameters: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TunedHyperParameters') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    final_hyper_parameter_tuning_job_objective_metric: Optional[FinalHyperParameterTuningJobObjectiveMetric] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalHyperParameterTuningJobObjectiveMetric') }})
    objective_status: Optional[ObjectiveStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectiveStatus') }})
    training_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_job_definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobDefinitionName') }})
    training_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tuning_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TuningJobName') }})
    
