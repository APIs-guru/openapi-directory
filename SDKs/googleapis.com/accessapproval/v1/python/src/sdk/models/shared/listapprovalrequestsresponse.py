from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListApprovalRequestsResponse:
    r"""ListApprovalRequestsResponse
    Response to listing of ApprovalRequest objects.
    """
    
    approval_requests: Optional[List[ApprovalRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRequests') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
