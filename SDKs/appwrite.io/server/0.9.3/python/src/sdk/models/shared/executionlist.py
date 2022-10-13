from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import execution


@dataclass_json
@dataclass
class ExecutionList:
    executions: List[execution.Execution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executions' }})
    sum: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    
