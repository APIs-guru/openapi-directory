from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Reservation:
    concurrency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concurrency' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    ignore_idle_slots: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreIdleSlots' }})
    multi_region_auxiliary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiRegionAuxiliary' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    slot_capacity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotCapacity' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
