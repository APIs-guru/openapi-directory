from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import workspacebundle


@dataclass_json
@dataclass
class CreateWorkspaceBundleResult:
    workspace_bundle: Optional[workspacebundle.WorkspaceBundle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkspaceBundle' }})
    
