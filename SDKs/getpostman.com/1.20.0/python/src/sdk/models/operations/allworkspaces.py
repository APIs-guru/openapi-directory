from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AllWorkspaces200ApplicationJSONWorkspaces:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class AllWorkspaces200ApplicationJSON:
    workspaces: Optional[List[AllWorkspaces200ApplicationJSONWorkspaces]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspaces' }})
    

@dataclass
class AllWorkspacesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    all_workspaces_200_application_json_object: Optional[AllWorkspaces200ApplicationJSON] = field(default=None)
    
