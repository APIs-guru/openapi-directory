from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DealServingMetadataDealPauseStatus:
    buyer_pause_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerPauseReason' }})
    first_paused_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstPausedBy' }})
    has_buyer_paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasBuyerPaused' }})
    has_seller_paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasSellerPaused' }})
    seller_pause_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerPauseReason' }})
    
