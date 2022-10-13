from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import hyperparametertrainingjobsummary
from . import hyperparametertuningjobconfig
from . import hyperparametertuningjobstatus_enum
from . import objectivestatuscounters
from . import hyperparametertrainingjobsummary
from . import hyperparametertrainingjobdefinition
from . import hyperparametertrainingjobdefinition
from . import trainingjobstatuscounters
from . import hyperparametertuningjobwarmstartconfig


@dataclass_json
@dataclass
class DescribeHyperParameterTuningJobResponse:
    best_training_job: Optional[hyperparametertrainingjobsummary.HyperParameterTrainingJobSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BestTrainingJob' }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    hyper_parameter_tuning_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HyperParameterTuningEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hyper_parameter_tuning_job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HyperParameterTuningJobArn' }})
    hyper_parameter_tuning_job_config: hyperparametertuningjobconfig.HyperParameterTuningJobConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HyperParameterTuningJobConfig' }})
    hyper_parameter_tuning_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HyperParameterTuningJobName' }})
    hyper_parameter_tuning_job_status: hyperparametertuningjobstatus_enum.HyperParameterTuningJobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HyperParameterTuningJobStatus' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    objective_status_counters: objectivestatuscounters.ObjectiveStatusCounters = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectiveStatusCounters' }})
    overall_best_training_job: Optional[hyperparametertrainingjobsummary.HyperParameterTrainingJobSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverallBestTrainingJob' }})
    training_job_definition: Optional[hyperparametertrainingjobdefinition.HyperParameterTrainingJobDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobDefinition' }})
    training_job_definitions: Optional[List[hyperparametertrainingjobdefinition.HyperParameterTrainingJobDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobDefinitions' }})
    training_job_status_counters: trainingjobstatuscounters.TrainingJobStatusCounters = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobStatusCounters' }})
    warm_start_config: Optional[hyperparametertuningjobwarmstartconfig.HyperParameterTuningJobWarmStartConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WarmStartConfig' }})
    
