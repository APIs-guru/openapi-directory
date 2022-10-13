from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import notifyworkersfailurecode_enum


@dataclass_json
@dataclass
class NotifyWorkersFailureStatus:
    notify_workers_failure_code: Optional[notifyworkersfailurecode_enum.NotifyWorkersFailureCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotifyWorkersFailureCode' }})
    notify_workers_failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotifyWorkersFailureMessage' }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerId' }})
    
