from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import failedworkspacechangerequest


@dataclass_json
@dataclass
class RebuildWorkspacesResult:
    failed_requests: Optional[List[failedworkspacechangerequest.FailedWorkspaceChangeRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedRequests' }})
    
