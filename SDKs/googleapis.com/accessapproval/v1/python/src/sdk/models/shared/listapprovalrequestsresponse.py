from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import approvalrequest


@dataclass_json
@dataclass
class ListApprovalRequestsResponse:
    approval_requests: Optional[List[approvalrequest.ApprovalRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRequests' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
