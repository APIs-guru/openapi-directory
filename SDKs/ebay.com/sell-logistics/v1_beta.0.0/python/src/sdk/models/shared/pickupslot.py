from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PickupSlot:
    pickup_slot_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupSlotEndTime' }})
    pickup_slot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupSlotId' }})
    pickup_slot_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupSlotStartTime' }})
    pickup_slot_time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupSlotTimeZone' }})
    
