from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import workspacecreationproperties


@dataclass_json
@dataclass
class ModifyWorkspaceCreationPropertiesRequest:
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    workspace_creation_properties: workspacecreationproperties.WorkspaceCreationProperties = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkspaceCreationProperties' }})
    
