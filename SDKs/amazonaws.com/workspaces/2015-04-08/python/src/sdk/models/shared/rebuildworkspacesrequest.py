from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RebuildWorkspacesRequest:
    rebuild_workspace_requests: List[RebuildRequest] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RebuildWorkspaceRequests') }})
    
