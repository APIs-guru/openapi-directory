from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LocationEvent:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    state_province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state_province' }})
    venue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'venue' }})
    
