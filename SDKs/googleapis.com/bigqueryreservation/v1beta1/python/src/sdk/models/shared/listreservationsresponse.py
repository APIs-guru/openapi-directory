from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reservation


@dataclass_json
@dataclass
class ListReservationsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    reservations: Optional[List[reservation.Reservation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservations' }})
    
