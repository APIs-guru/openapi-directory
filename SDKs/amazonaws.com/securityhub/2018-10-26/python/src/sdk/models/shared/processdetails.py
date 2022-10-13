from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProcessDetails:
    launched_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchedAt' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    parent_pid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentPid' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    pid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pid' }})
    terminated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminatedAt' }})
    
