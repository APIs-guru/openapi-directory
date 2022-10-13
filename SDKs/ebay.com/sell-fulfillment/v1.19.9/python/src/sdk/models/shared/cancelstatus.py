from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cancelrequest


@dataclass_json
@dataclass
class CancelStatus:
    cancel_requests: Optional[List[cancelrequest.CancelRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelRequests' }})
    cancel_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelState' }})
    cancelled_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelledDate' }})
    
