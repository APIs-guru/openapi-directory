from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Country:
    iso_alpha_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso_alpha_2' }})
    iso_alpha_3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso_alpha_3' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
