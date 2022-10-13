from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExportTaskExecutionInfo:
    completion_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionTime' }})
    creation_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    
