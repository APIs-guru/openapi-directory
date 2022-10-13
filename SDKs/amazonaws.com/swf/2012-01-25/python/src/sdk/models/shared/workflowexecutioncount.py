from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WorkflowExecutionCount:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truncated' }})
    
