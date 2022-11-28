from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NegotiatedPricePolicy:
    best_offer_auto_accept_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestOfferAutoAcceptEnabled') }})
    best_offer_auto_decline_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestOfferAutoDeclineEnabled') }})
    best_offer_counter_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestOfferCounterEnabled') }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryId') }})
    category_tree_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryTreeId') }})
    
