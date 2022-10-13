from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import leg1
from . import leg1
from . import leg1


@dataclass_json
@dataclass
class AirtravelMultilegRequest:
    api_key_l1: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKey_l2' }})
    contact_email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactEmail' }})
    contact_first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactFirstName' }})
    contact_last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactLastName' }})
    leg1: leg1.Leg1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leg1' }})
    leg2: leg1.Leg1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leg2' }})
    leg3: leg1.Leg1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leg3' }})
    legs_count: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legs_count' }})
    number_of_passengers: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_of_passengers' }})
    travel_mode: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travel_mode' }})
    
