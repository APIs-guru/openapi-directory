from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DealPauseStatusFirstPausedByEnum(str, Enum):
    BUYER_SELLER_ROLE_UNSPECIFIED = "BUYER_SELLER_ROLE_UNSPECIFIED"
    BUYER = "BUYER"
    SELLER = "SELLER"


@dataclass_json
@dataclass
class DealPauseStatus:
    r"""DealPauseStatus
    Tracks which parties (if any) have paused a deal. The deal is considered paused if either hasBuyerPaused or hasSellPaused is true.
    """
    
    buyer_pause_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerPauseReason') }})
    first_paused_by: Optional[DealPauseStatusFirstPausedByEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstPausedBy') }})
    has_buyer_paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasBuyerPaused') }})
    has_seller_paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasSellerPaused') }})
    seller_pause_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerPauseReason') }})
    
