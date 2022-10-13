from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import userinitiatedcancellation


@dataclass_json
@dataclass
class CanceledStateContext:
    developer_initiated_cancellation: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'developerInitiatedCancellation' }})
    replacement_cancellation: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replacementCancellation' }})
    system_initiated_cancellation: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemInitiatedCancellation' }})
    user_initiated_cancellation: Optional[userinitiatedcancellation.UserInitiatedCancellation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInitiatedCancellation' }})
    
