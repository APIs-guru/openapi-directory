from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeExportTasksResponse:
    export_tasks: Optional[List[ExportTask]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportTasks') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
