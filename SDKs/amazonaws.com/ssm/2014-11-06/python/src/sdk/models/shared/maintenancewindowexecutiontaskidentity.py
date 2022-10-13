from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import maintenancewindowexecutionstatus_enum
from . import maintenancewindowtasktype_enum


@dataclass_json
@dataclass
class MaintenanceWindowExecutionTaskIdentity:
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[maintenancewindowexecutionstatus_enum.MaintenanceWindowExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusDetails' }})
    task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskArn' }})
    task_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskExecutionId' }})
    task_type: Optional[maintenancewindowtasktype_enum.MaintenanceWindowTaskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskType' }})
    window_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowExecutionId' }})
    
