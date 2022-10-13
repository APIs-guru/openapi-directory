from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import maintenancewindowexecutionstatus_enum
from . import maintenancewindowtaskparametervalueexpression
from . import maintenancewindowtasktype_enum


@dataclass_json
@dataclass
class GetMaintenanceWindowExecutionTaskResult:
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_concurrency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxConcurrency' }})
    max_errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxErrors' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRole' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[maintenancewindowexecutionstatus_enum.MaintenanceWindowExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusDetails' }})
    task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskArn' }})
    task_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskExecutionId' }})
    task_parameters: Optional[List[dict[str, maintenancewindowtaskparametervalueexpression.MaintenanceWindowTaskParameterValueExpression]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskParameters' }})
    type: Optional[maintenancewindowtasktype_enum.MaintenanceWindowTaskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    window_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowExecutionId' }})
    
