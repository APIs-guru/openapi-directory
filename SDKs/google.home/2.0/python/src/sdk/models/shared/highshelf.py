from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HighShelf:
    frequency: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    gain_db: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gain_db' }})
    quality: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality' }})
    
