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
class HyperParameterTuningJobSummary:
    r"""HyperParameterTuningJobSummary
    Provides summary information about a hyperparameter tuning job.
    """
    
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hyper_parameter_tuning_job_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HyperParameterTuningJobArn') }})
    hyper_parameter_tuning_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HyperParameterTuningJobName') }})
    hyper_parameter_tuning_job_status: HyperParameterTuningJobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HyperParameterTuningJobStatus') }})
    objective_status_counters: ObjectiveStatusCounters = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectiveStatusCounters') }})
    strategy: HyperParameterTuningJobStrategyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Strategy') }})
    training_job_status_counters: TrainingJobStatusCounters = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobStatusCounters') }})
    hyper_parameter_tuning_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HyperParameterTuningEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_limits: Optional[ResourceLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceLimits') }})
    
