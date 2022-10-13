from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import bulkemailstatus_enum


@dataclass_json
@dataclass
class BulkEmailEntryResult:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageId' }})
    status: Optional[bulkemailstatus_enum.BulkEmailStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
