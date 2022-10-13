from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ShipmentCancellation:
    cancellation_requested_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellationRequestedDate' }})
    cancellation_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellationStatus' }})
    
