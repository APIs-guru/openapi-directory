from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import exporttaskexecutioninfo
from . import exporttaskstatus


@dataclass_json
@dataclass
class ExportTask:
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    destination_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationPrefix' }})
    execution_info: Optional[exporttaskexecutioninfo.ExportTaskExecutionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionInfo' }})
    from_: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    status: Optional[exporttaskstatus.ExportTaskStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskId' }})
    task_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskName' }})
    to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    
