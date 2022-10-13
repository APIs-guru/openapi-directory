from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import hyperparametertuningjobstatus_enum
from . import objectivestatuscounters
from . import resourcelimits
from . import hyperparametertuningjobstrategytype_enum
from . import trainingjobstatuscounters


@dataclass_json
@dataclass
class HyperParameterTuningJobSummary:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hyper_parameter_tuning_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HyperParameterTuningEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hyper_parameter_tuning_job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HyperParameterTuningJobArn' }})
    hyper_parameter_tuning_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HyperParameterTuningJobName' }})
    hyper_parameter_tuning_job_status: hyperparametertuningjobstatus_enum.HyperParameterTuningJobStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HyperParameterTuningJobStatus' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    objective_status_counters: objectivestatuscounters.ObjectiveStatusCounters = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectiveStatusCounters' }})
    resource_limits: Optional[resourcelimits.ResourceLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceLimits' }})
    strategy: hyperparametertuningjobstrategytype_enum.HyperParameterTuningJobStrategyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Strategy' }})
    training_job_status_counters: trainingjobstatuscounters.TrainingJobStatusCounters = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobStatusCounters' }})
    
