from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import monitoringexecutionsummary
from . import monitoringscheduleconfig
from . import schedulestatus_enum
from . import monitoringtype_enum


@dataclass_json
@dataclass
class DescribeMonitoringScheduleResponse:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointName' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    last_modified_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_monitoring_execution_summary: Optional[monitoringexecutionsummary.MonitoringExecutionSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastMonitoringExecutionSummary' }})
    monitoring_schedule_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringScheduleArn' }})
    monitoring_schedule_config: monitoringscheduleconfig.MonitoringScheduleConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringScheduleConfig' }})
    monitoring_schedule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringScheduleName' }})
    monitoring_schedule_status: schedulestatus_enum.ScheduleStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringScheduleStatus' }})
    monitoring_type: Optional[monitoringtype_enum.MonitoringTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringType' }})
    
