from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExportTask:
    r"""ExportTask
    Represents an export task.
    """
    
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    destination_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationPrefix') }})
    execution_info: Optional[ExportTaskExecutionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionInfo') }})
    from_: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    status: Optional[ExportTaskStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    task_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskName') }})
    to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    
