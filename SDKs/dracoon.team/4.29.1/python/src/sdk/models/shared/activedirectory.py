from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActiveDirectory:
    alias: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_global_available: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isGlobalAvailable' }})
    
