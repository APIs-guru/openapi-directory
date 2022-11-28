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
class DescribeMonitoringScheduleResponse:
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    monitoring_schedule_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringScheduleArn') }})
    monitoring_schedule_config: MonitoringScheduleConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringScheduleConfig') }})
    monitoring_schedule_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringScheduleName') }})
    monitoring_schedule_status: ScheduleStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringScheduleStatus') }})
    endpoint_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointName') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    last_monitoring_execution_summary: Optional[MonitoringExecutionSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastMonitoringExecutionSummary') }})
    monitoring_type: Optional[MonitoringTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringType') }})
    
