from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import validationstatus_enum


@dataclass_json
@dataclass
class NotificationContext:
    status: Optional[validationstatus_enum.ValidationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    validation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationId' }})
    
