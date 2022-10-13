from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import user
from . import timeduration
from . import offereditem


@dataclass_json
@dataclass
class Offer:
    allow_counter_offer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowCounterOffer' }})
    buyer: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer' }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate' }})
    initiated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initiatedBy' }})
    last_modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedDate' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    offer_duration: Optional[timeduration.TimeDuration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerDuration' }})
    offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerId' }})
    offer_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerStatus' }})
    offer_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerType' }})
    offered_items: Optional[List[offereditem.OfferedItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offeredItems' }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    
