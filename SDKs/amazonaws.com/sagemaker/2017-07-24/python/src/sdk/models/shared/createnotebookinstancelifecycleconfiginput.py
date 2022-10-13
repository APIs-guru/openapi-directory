from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notebookinstancelifecyclehook
from . import notebookinstancelifecyclehook


@dataclass_json
@dataclass
class CreateNotebookInstanceLifecycleConfigInput:
    notebook_instance_lifecycle_config_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceLifecycleConfigName' }})
    on_create: Optional[List[notebookinstancelifecyclehook.NotebookInstanceLifecycleHook]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnCreate' }})
    on_start: Optional[List[notebookinstancelifecyclehook.NotebookInstanceLifecycleHook]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnStart' }})
    
