from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KendraConfiguration:
    kendra_index: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kendraIndex' }})
    query_filter_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryFilterString' }})
    role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    
