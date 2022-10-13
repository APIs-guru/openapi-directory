from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NetworkAddressReservation:
    end_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endAddress' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    start_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startAddress' }})
    
