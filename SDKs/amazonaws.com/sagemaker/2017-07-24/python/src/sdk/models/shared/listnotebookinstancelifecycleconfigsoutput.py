from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notebookinstancelifecycleconfigsummary


@dataclass_json
@dataclass
class ListNotebookInstanceLifecycleConfigsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    notebook_instance_lifecycle_configs: Optional[List[notebookinstancelifecycleconfigsummary.NotebookInstanceLifecycleConfigSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceLifecycleConfigs' }})
    
