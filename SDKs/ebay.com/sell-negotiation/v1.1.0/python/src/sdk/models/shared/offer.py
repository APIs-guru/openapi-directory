from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Offer:
    r"""Offer
    A complex type that defines an offer that a seller makes to eligible buyers.
    """
    
    allow_counter_offer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowCounterOffer') }})
    buyer: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer') }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate') }})
    initiated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiatedBy') }})
    last_modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedDate') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    offer_duration: Optional[TimeDuration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerDuration') }})
    offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerId') }})
    offer_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerStatus') }})
    offer_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerType') }})
    offered_items: Optional[List[OfferedItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeredItems') }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    
