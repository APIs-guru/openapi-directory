from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import executionstatus_enum
from . import monitoringtype_enum


@dataclass_json
@dataclass
class MonitoringExecutionSummary:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointName' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    last_modified_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    monitoring_execution_status: executionstatus_enum.ExecutionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringExecutionStatus' }})
    monitoring_job_definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringJobDefinitionName' }})
    monitoring_schedule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringScheduleName' }})
    monitoring_type: Optional[monitoringtype_enum.MonitoringTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonitoringType' }})
    processing_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingJobArn' }})
    scheduled_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
