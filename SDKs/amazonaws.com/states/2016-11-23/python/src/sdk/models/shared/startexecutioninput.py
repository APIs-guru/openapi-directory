from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartExecutionInput:
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state_machine_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateMachineArn' }})
    trace_header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traceHeader' }})
    
