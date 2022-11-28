from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateWorkspacesResult:
    failed_requests: Optional[List[FailedCreateWorkspaceRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedRequests') }})
    pending_requests: Optional[List[Workspace]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingRequests') }})
    
