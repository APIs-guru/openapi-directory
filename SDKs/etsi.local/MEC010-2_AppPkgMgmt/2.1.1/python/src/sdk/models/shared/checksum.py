from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Checksum:
    algorithm: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    hash: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hash' }})
    
