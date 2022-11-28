from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InfoFromBuyer:
    r"""InfoFromBuyer
    This container is returned if the buyer is returning one or more line items in an order that is associated with the payment dispute, and that buyer has provided return shipping tracking information and/or a note about the return.
    """
    
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    return_shipment_tracking: Optional[List[TrackingInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnShipmentTracking') }})
    
