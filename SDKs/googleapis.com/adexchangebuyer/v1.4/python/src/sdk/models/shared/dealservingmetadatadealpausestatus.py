from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DealServingMetadataDealPauseStatus:
    r"""DealServingMetadataDealPauseStatus
    Tracks which parties (if any) have paused a deal. The deal is considered paused if has_buyer_paused || has_seller_paused. Each of the has_buyer_paused or the has_seller_paused bits can be set independently.
    """
    
    buyer_pause_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerPauseReason') }})
    first_paused_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstPausedBy') }})
    has_buyer_paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasBuyerPaused') }})
    has_seller_paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasSellerPaused') }})
    seller_pause_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerPauseReason') }})
    
