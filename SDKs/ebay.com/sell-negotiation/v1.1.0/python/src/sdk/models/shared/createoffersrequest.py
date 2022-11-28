from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateOffersRequest:
    r"""CreateOffersRequest
    This complex type contains the fields needed to create an offer to a buyer that is initiated by the seller.
    """
    
    allow_counter_offer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowCounterOffer') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    offer_duration: Optional[TimeDuration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerDuration') }})
    offered_items: Optional[List[OfferedItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeredItems') }})
    
