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
class MonitoringExecutionSummary:
    r"""MonitoringExecutionSummary
    Summary of information about the last monitoring job to run.
    """
    
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    monitoring_execution_status: ExecutionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringExecutionStatus') }})
    monitoring_schedule_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringScheduleName') }})
    scheduled_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduledTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointName') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    monitoring_job_definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringJobDefinitionName') }})
    monitoring_type: Optional[MonitoringTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringType') }})
    processing_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingJobArn') }})
    
