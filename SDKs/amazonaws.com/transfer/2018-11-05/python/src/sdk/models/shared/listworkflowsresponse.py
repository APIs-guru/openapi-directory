from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listedworkflow


@dataclass_json
@dataclass
class ListWorkflowsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    workflows: List[listedworkflow.ListedWorkflow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Workflows' }})
    
