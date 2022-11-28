from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DealPausingInfoPauseRoleEnum(str, Enum):
    BUYER_SELLER_ROLE_UNSPECIFIED = "BUYER_SELLER_ROLE_UNSPECIFIED"
    BUYER = "BUYER"
    SELLER = "SELLER"


@dataclass_json
@dataclass
class DealPausingInfo:
    r"""DealPausingInfo
    Information related to deal pausing.
    """
    
    pause_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pauseReason') }})
    pause_role: Optional[DealPausingInfoPauseRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pauseRole') }})
    pausing_consented: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pausingConsented') }})
    
