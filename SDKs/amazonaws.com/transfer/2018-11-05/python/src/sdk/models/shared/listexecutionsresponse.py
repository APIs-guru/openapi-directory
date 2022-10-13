from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listedexecution


@dataclass_json
@dataclass
class ListExecutionsResponse:
    executions: List[listedexecution.ListedExecution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Executions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    workflow_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkflowId' }})
    
