from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModifyWorkspaceAccessPropertiesRequest:
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    workspace_access_properties: WorkspaceAccessProperties = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceAccessProperties') }})
    
