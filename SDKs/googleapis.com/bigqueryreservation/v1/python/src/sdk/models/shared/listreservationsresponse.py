from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListReservationsResponse:
    r"""ListReservationsResponse
    The response for ReservationService.ListReservations.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    reservations: Optional[List[Reservation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservations') }})
    
