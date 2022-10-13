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
class GetMaintenanceWindowExecutionTaskInvocationResult:
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionId' }})
    invocation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvocationId' }})
    owner_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerInformation' }})
    parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[maintenancewindowexecutionstatus_enum.MaintenanceWindowExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusDetails' }})
    task_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskExecutionId' }})
    task_type: Optional[maintenancewindowtasktype_enum.MaintenanceWindowTaskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskType' }})
    window_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowExecutionId' }})
    window_target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowTargetId' }})
    
