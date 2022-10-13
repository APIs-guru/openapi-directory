from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import targetworkspacestate_enum


@dataclass_json
@dataclass
class ModifyWorkspaceStateRequest:
    workspace_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkspaceId' }})
    workspace_state: targetworkspacestate_enum.TargetWorkspaceStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkspaceState' }})
    
