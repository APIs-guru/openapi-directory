from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import amount
from . import selleractionstorelease


@dataclass_json
@dataclass
class PaymentHold:
    expected_release_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expectedReleaseDate' }})
    hold_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holdAmount' }})
    hold_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holdReason' }})
    hold_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holdState' }})
    release_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseDate' }})
    seller_actions_to_release: Optional[List[selleractionstorelease.SellerActionsToRelease]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerActionsToRelease' }})
    
