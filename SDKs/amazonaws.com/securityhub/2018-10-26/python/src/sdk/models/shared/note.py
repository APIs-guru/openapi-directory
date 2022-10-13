from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Note:
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    updated_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedAt' }})
    updated_by: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedBy' }})
    
