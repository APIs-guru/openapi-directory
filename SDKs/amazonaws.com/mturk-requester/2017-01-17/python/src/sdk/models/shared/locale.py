from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Locale:
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    subdivision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subdivision' }})
    
