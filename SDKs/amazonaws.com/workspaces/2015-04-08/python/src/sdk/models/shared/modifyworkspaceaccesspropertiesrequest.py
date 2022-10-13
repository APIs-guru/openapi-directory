from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import workspaceaccessproperties


@dataclass_json
@dataclass
class ModifyWorkspaceAccessPropertiesRequest:
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    workspace_access_properties: workspaceaccessproperties.WorkspaceAccessProperties = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkspaceAccessProperties' }})
    
