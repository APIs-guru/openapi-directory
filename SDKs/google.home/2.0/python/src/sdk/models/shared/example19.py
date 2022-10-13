from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Example19:
    success: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    
