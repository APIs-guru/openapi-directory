from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deliverystatus_enum


@dataclass_json
@dataclass
class MessageResult:
    delivery_status: deliverystatus_enum.DeliveryStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryStatus' }})
    message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageId' }})
    status_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusCode' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    updated_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedToken' }})
    
