from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import executionsummary


@dataclass_json
@dataclass
class ListExecutionsOutput:
    executions: Optional[List[executionsummary.ExecutionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
