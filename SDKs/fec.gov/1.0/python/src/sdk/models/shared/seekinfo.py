from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SeekInfo:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    last_indexes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_indexes' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    
