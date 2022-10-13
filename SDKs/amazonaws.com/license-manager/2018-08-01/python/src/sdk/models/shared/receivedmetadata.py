from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import allowedoperation_enum
from . import receivedstatus_enum


@dataclass_json
@dataclass
class ReceivedMetadata:
    allowed_operations: Optional[List[allowedoperation_enum.AllowedOperationEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowedOperations' }})
    received_status: Optional[receivedstatus_enum.ReceivedStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReceivedStatus' }})
    received_status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReceivedStatusReason' }})
    
