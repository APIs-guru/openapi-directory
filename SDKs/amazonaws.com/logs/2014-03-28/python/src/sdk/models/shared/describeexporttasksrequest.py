from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import exporttaskstatuscode_enum


@dataclass_json
@dataclass
class DescribeExportTasksRequest:
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    status_code: Optional[exporttaskstatuscode_enum.ExportTaskStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskId' }})
    
