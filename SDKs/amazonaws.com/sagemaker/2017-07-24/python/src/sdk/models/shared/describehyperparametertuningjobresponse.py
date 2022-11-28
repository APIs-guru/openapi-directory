from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeHyperParameterTuningJobResponse:
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hyper_parameter_tuning_job_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HyperParameterTuningJobArn') }})
    hyper_parameter_tuning_job_config: HyperParameterTuningJobConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HyperParameterTuningJobConfig') }})
    hyper_parameter_tuning_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HyperParameterTuningJobName') }})
    hyper_parameter_tuning_job_status: HyperParameterTuningJobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HyperParameterTuningJobStatus') }})
    objective_status_counters: ObjectiveStatusCounters = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectiveStatusCounters') }})
    training_job_status_counters: TrainingJobStatusCounters = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobStatusCounters') }})
    best_training_job: Optional[HyperParameterTrainingJobSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BestTrainingJob') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    hyper_parameter_tuning_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HyperParameterTuningEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    overall_best_training_job: Optional[HyperParameterTrainingJobSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverallBestTrainingJob') }})
    training_job_definition: Optional[HyperParameterTrainingJobDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobDefinition') }})
    training_job_definitions: Optional[List[HyperParameterTrainingJobDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobDefinitions') }})
    warm_start_config: Optional[HyperParameterTuningJobWarmStartConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WarmStartConfig') }})
    
