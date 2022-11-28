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
class MonitoringSchedule:
    r"""MonitoringSchedule
    A schedule for a model monitoring job. For information about model monitor, see <a href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html\">Amazon SageMaker Model Monitor</a>.
    """
    
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointName') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_monitoring_execution_summary: Optional[MonitoringExecutionSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastMonitoringExecutionSummary') }})
    monitoring_schedule_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringScheduleArn') }})
    monitoring_schedule_config: Optional[MonitoringScheduleConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringScheduleConfig') }})
    monitoring_schedule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringScheduleName') }})
    monitoring_schedule_status: Optional[ScheduleStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringScheduleStatus') }})
    monitoring_type: Optional[MonitoringTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonitoringType') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
