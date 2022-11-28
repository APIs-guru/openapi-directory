from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateMaintenanceWindowTaskResult:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    logging_info: Optional[LoggingInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoggingInfo') }})
    max_concurrency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxConcurrency') }})
    max_errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxErrors') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRoleArn') }})
    targets: Optional[List[Target]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskArn') }})
    task_invocation_parameters: Optional[MaintenanceWindowTaskInvocationParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskInvocationParameters') }})
    task_parameters: Optional[dict[str, MaintenanceWindowTaskParameterValueExpression]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskParameters') }})
    window_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WindowId') }})
    window_task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WindowTaskId') }})
    
