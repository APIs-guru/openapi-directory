from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateExportTaskRequest:
    destination: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    destination_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationPrefix' }})
    from_: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    log_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    log_stream_name_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logStreamNamePrefix' }})
    task_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskName' }})
    to: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    
