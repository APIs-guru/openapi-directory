from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartWorkspacesRequest:
    start_workspace_requests: List[StartRequest] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartWorkspaceRequests') }})
    
