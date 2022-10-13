from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Execution:
    dollar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': '$id' }})
    date_created: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateCreated' }})
    exit_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exitCode' }})
    function_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionId' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    stderr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stderr' }})
    stdout: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stdout' }})
    time: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    trigger: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger' }})
    
