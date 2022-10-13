from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DealPauseStatusFirstPausedByEnum(str, Enum):
    BUYER_SELLER_ROLE_UNSPECIFIED = "BUYER_SELLER_ROLE_UNSPECIFIED"
    BUYER = "BUYER"
    SELLER = "SELLER"


@dataclass_json
@dataclass
class DealPauseStatus:
    buyer_pause_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerPauseReason' }})
    first_paused_by: Optional[DealPauseStatusFirstPausedByEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstPausedBy' }})
    has_buyer_paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasBuyerPaused' }})
    has_seller_paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasSellerPaused' }})
    seller_pause_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerPauseReason' }})
    
