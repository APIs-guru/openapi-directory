from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Getvolume:
    volume: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume' }})
    
