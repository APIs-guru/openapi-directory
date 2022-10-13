from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SendTaskSuccessInput:
    output: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'output' }})
    task_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskToken' }})
    
