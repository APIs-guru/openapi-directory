from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Location:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    lat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lon') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    
