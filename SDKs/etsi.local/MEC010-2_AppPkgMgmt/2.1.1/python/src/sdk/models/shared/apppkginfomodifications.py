from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class AppPkgInfoModificationsOperationStateEnum(str, Enum):
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclass
class AppPkgInfoModifications:
    operation_state: AppPkgInfoModificationsOperationStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationState' }})
    
