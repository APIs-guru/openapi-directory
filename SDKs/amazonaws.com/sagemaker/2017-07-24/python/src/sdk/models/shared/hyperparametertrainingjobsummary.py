from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import finalhyperparametertuningjobobjectivemetric
from . import objectivestatus_enum
from . import trainingjobstatus_enum


@dataclass_json
@dataclass
class HyperParameterTrainingJobSummary:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    final_hyper_parameter_tuning_job_objective_metric: Optional[finalhyperparametertuningjobobjectivemetric.FinalHyperParameterTuningJobObjectiveMetric] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalHyperParameterTuningJobObjectiveMetric' }})
    objective_status: Optional[objectivestatus_enum.ObjectiveStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectiveStatus' }})
    training_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobArn' }})
    training_job_definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobDefinitionName' }})
    training_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobName' }})
    training_job_status: trainingjobstatus_enum.TrainingJobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobStatus' }})
    training_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tuned_hyper_parameters: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TunedHyperParameters' }})
    tuning_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TuningJobName' }})
    
