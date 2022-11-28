from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BlockActionBlockScopeEnum(str, Enum):
    BLOCK_SCOPE_UNSPECIFIED = "BLOCK_SCOPE_UNSPECIFIED"
    BLOCK_SCOPE_WORK_PROFILE = "BLOCK_SCOPE_WORK_PROFILE"
    BLOCK_SCOPE_DEVICE = "BLOCK_SCOPE_DEVICE"


@dataclass_json
@dataclass
class BlockAction:
    r"""BlockAction
    An action to block access to apps and data on a fully managed device or in a work profile. This action also triggers a device or work profile to displays a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified.
    """
    
    block_after_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockAfterDays') }})
    block_scope: Optional[BlockActionBlockScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockScope') }})
    
