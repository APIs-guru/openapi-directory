from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notifyworkersfailurestatus


@dataclass_json
@dataclass
class NotifyWorkersResponse:
    notify_workers_failure_statuses: Optional[List[notifyworkersfailurestatus.NotifyWorkersFailureStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotifyWorkersFailureStatuses' }})
    
