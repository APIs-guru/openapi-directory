from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timeduration
from . import offereditem


@dataclass_json
@dataclass
class CreateOffersRequest:
    allow_counter_offer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowCounterOffer' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    offer_duration: Optional[timeduration.TimeDuration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerDuration' }})
    offered_items: Optional[List[offereditem.OfferedItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offeredItems' }})
    
