from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartExecutionInput:
    state_machine_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMachineArn') }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    trace_header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traceHeader') }})
    
