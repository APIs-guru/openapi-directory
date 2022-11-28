from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ShipmentCancellation:
    r"""ShipmentCancellation
    This type defines a shipment cancellation by the date and time the cancellation request was made and the current status of the request.
    """
    
    cancellation_requested_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellationRequestedDate') }})
    cancellation_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellationStatus') }})
    
