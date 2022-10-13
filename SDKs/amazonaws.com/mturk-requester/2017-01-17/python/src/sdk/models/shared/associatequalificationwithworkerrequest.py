from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssociateQualificationWithWorkerRequest:
    integer_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntegerValue' }})
    qualification_type_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualificationTypeId' }})
    send_notification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SendNotification' }})
    worker_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerId' }})
    
