from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import logginginfo
from . import target
from . import maintenancewindowtaskinvocationparameters
from . import maintenancewindowtaskparametervalueexpression
from . import maintenancewindowtasktype_enum


@dataclass_json
@dataclass
class RegisterTaskWithMaintenanceWindowRequest:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    logging_info: Optional[logginginfo.LoggingInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggingInfo' }})
    max_concurrency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxConcurrency' }})
    max_errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxErrors' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRoleArn' }})
    targets: Optional[List[target.Target]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    task_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskArn' }})
    task_invocation_parameters: Optional[maintenancewindowtaskinvocationparameters.MaintenanceWindowTaskInvocationParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskInvocationParameters' }})
    task_parameters: Optional[dict[str, maintenancewindowtaskparametervalueexpression.MaintenanceWindowTaskParameterValueExpression]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskParameters' }})
    task_type: maintenancewindowtasktype_enum.MaintenanceWindowTaskTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskType' }})
    window_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowId' }})
    
