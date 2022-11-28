from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ExportTasksMessage:
    export_tasks: Optional[List[ExportTask]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
