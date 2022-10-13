from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MigrateWorkspaceResult:
    source_workspace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceWorkspaceId' }})
    target_workspace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetWorkspaceId' }})
    
