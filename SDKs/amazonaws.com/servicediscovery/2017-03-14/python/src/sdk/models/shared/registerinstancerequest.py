from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegisterInstanceRequest:
    attributes: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    creator_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatorRequestId' }})
    instance_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    service_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceId' }})
    
