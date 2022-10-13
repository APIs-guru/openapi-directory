from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RateLimit:
    limit: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    remaining: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remaining' }})
    reset: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reset' }})
    
