from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class BlockActionBlockScopeEnum(str, Enum):
    BLOCK_SCOPE_UNSPECIFIED = "BLOCK_SCOPE_UNSPECIFIED"
    BLOCK_SCOPE_WORK_PROFILE = "BLOCK_SCOPE_WORK_PROFILE"
    BLOCK_SCOPE_DEVICE = "BLOCK_SCOPE_DEVICE"


@dataclass_json
@dataclass
class BlockAction:
    block_after_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockAfterDays' }})
    block_scope: Optional[BlockActionBlockScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockScope' }})
    
