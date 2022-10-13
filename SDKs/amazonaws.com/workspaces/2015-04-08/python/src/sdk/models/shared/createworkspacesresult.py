from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import failedcreateworkspacerequest
from . import workspace


@dataclass_json
@dataclass
class CreateWorkspacesResult:
    failed_requests: Optional[List[failedcreateworkspacerequest.FailedCreateWorkspaceRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedRequests' }})
    pending_requests: Optional[List[workspace.Workspace]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PendingRequests' }})
    
