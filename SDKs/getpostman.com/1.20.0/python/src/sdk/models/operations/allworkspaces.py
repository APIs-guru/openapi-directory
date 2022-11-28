from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AllWorkspaces200ApplicationJSONWorkspaces:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class AllWorkspaces200ApplicationJSON:
    workspaces: Optional[List[AllWorkspaces200ApplicationJSONWorkspaces]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaces') }})
    

@dataclass
class AllWorkspacesResponse:
    content_type: str = field()
    status_code: int = field()
    all_workspaces_200_application_json_object: Optional[AllWorkspaces200ApplicationJSON] = field(default=None)
    
