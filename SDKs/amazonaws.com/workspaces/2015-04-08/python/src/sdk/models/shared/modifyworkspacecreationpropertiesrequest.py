from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModifyWorkspaceCreationPropertiesRequest:
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    workspace_creation_properties: WorkspaceCreationProperties = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceCreationProperties') }})
    
