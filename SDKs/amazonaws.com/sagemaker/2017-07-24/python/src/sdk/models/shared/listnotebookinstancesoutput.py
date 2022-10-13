from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notebookinstancesummary


@dataclass_json
@dataclass
class ListNotebookInstancesOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    notebook_instances: Optional[List[notebookinstancesummary.NotebookInstanceSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstances' }})
    
