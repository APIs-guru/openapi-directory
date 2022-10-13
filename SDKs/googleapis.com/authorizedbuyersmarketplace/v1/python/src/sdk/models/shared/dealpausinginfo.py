from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DealPausingInfoPauseRoleEnum(str, Enum):
    BUYER_SELLER_ROLE_UNSPECIFIED = "BUYER_SELLER_ROLE_UNSPECIFIED"
    BUYER = "BUYER"
    SELLER = "SELLER"


@dataclass_json
@dataclass
class DealPausingInfo:
    pause_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pauseReason' }})
    pause_role: Optional[DealPausingInfoPauseRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pauseRole' }})
    pausing_consented: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pausingConsented' }})
    
