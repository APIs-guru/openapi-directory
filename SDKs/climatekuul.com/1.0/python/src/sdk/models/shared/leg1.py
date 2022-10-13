from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Leg1:
    destination_airport_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_airport_code' }})
    origin_airport_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin_airport_code' }})
    travel_class: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travel_class' }})
    
